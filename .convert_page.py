import json
import re
import subprocess
from html.parser import HTMLParser
from pathlib import Path


source = subprocess.check_output(
    ["git", "show", "HEAD:index (1).html"], text=True, encoding="utf-8"
)
css = re.search(r"<style>(.*?)</style>", source, re.S).group(1).strip()
body = re.search(r"<body>(.*?)</body>", source, re.S).group(1)
script = re.search(r"<script>(.*?)</script>", body, re.S).group(1).strip()
body = re.sub(r"<script>.*?</script>", "", body, flags=re.S)
body = body.replace(
    '<a href="#">Sign in</a>',
    '<button class="text-button" type="button" id="signin">Sign in</button>',
)
body = body.replace(
    '<a href="#">Privacy</a>',
    '<button class="text-button" type="button" data-info="privacy">Privacy</button>',
)
body = body.replace(
    '<a href="#">Terms</a>',
    '<button class="text-button" type="button" data-info="terms">Terms</button>',
)
body = body.replace(
    '<a href="#">Contact</a>', '<a href="#join">Contact</a>'
)
body = body.replace(
    '<button class="btn" type="submit">Join the list</button>',
    '<button class="btn" type="submit">Save my interest</button>',
)
body = body.replace(
    '<p class="note" id="note" role="status"></p>',
    '<p class="note" id="note" role="status" aria-live="polite"></p>'
    '<button class="text-button local-remove" type="button" id="remove-interest" hidden>'
    'Remove saved interest from this browser</button>'
    '<p class="hint">Your email is stored only in this browser preview and is not sent to Lumo.</p>',
)
body = body.replace(
    '<a class="btn ghost" href="#how">See how it works &rsaquo;</a>',
    '<a class="btn ghost" href="#how">See how it works &rsaquo;</a>'
    '<button class="btn sec" type="button" id="start-tour">Take the product tour</button>',
)


class ToJSX(HTMLParser):
    void = {
        "area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr",
    }
    attr_map = {
        "class": "className",
        "for": "htmlFor",
        "tabindex": "tabIndex",
        "autocomplete": "autoComplete",
        "maxlength": "maxLength",
        "readonly": "readOnly",
        "colspan": "colSpan",
        "rowspan": "rowSpan",
        "crossorigin": "crossOrigin",
        "stroke-width": "strokeWidth",
        "stroke-linecap": "strokeLinecap",
        "stroke-linejoin": "strokeLinejoin",
        "fill-rule": "fillRule",
        "clip-rule": "clipRule",
        "viewbox": "viewBox",
    }
    bool_attrs = {
        "checked", "disabled", "multiple", "required", "selected",
        "open", "hidden", "autofocus", "controls", "loop", "muted",
    }

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.output = []
        self.suppressed = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.suppressed += 1
            return
        if self.suppressed:
            return
        self.output.append("<" + tag)
        for key, value in attrs:
            name = self.attr_map.get(key, key)
            if value is None and key in self.bool_attrs:
                self.output.append(" " + name + "={true}")
            elif key == "style" and value:
                styles = {}
                for declaration in value.split(";"):
                    if ":" not in declaration:
                        continue
                    prop, val = declaration.split(":", 1)
                    prop, val = prop.strip(), val.strip()
                    if not prop.startswith("--"):
                        parts = prop.split("-")
                        prop = parts[0] + "".join(
                            part[:1].upper() + part[1:] for part in parts[1:]
                        )
                    styles[prop] = val
                self.output.append(" style={" + json.dumps(styles) + "}")
            else:
                if key == "value" and tag in ("input", "textarea", "select"):
                    name = "defaultValue"
                elif key == "checked":
                    name = "defaultChecked"
                elif key == "selected":
                    name = "defaultSelected"
                self.output.append(
                    " " + name + "={" + json.dumps(value, ensure_ascii=False) + "}"
                )
        self.output.append(" />" if tag in self.void else ">")

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            if self.suppressed:
                self.suppressed -= 1
            return
        if not self.suppressed and tag not in self.void:
            self.output.append("</" + tag + ">")

    def handle_data(self, data):
        if not self.suppressed and data:
            self.output.append("{" + json.dumps(data, ensure_ascii=False) + "}")

    def handle_comment(self, data):
        return


parser = ToJSX()
parser.feed(body)
parser.close()
markup = "".join(parser.output)
jsx = (
    '"use client";\n\n'
    'import { useEffect } from "react";\n'
    'import { mountInteractions } from "./interactions";\n\n'
    "export default function LumoApp() {\n"
    "  useEffect(() => {\n"
    "    mountInteractions();\n"
    "  }, []);\n\n"
    '  return (\n    <div id="lumo-app">\n'
    + markup
    + "\n    </div>\n  );\n}\n"
)

Path("app/globals.css").write_text(css + "\n", encoding="utf-8")
Path("app/LumoApp.js").write_text(jsx, encoding="utf-8")
Path("app/interactions.js").write_text(
    "export function mountInteractions() {\n" + script + "\n}\n",
    encoding="utf-8",
)
print("Generated React markup, stylesheet, and interaction module.")
