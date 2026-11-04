export function mountInteractions() {
  var appRoot = document.getElementById("lumo-app");
  if (!appRoot || appRoot.dataset.interactionsReady === "true") return;
  appRoot.dataset.interactionsReady = "true";
  (function () {
    var $ = function (s, r) {
      return (r || document).querySelector(s);
    };
    var $$ = function (s, r) {
      return Array.prototype.slice.call((r || document).querySelectorAll(s));
    };
    var LET = ["A", "B", "C", "D"];
    var SAMPLE1 = [
      {
        q: "Which figure best shows how accurate billing is?",
        o: [
          "Invoices sent per week",
          "Share of invoices with no corrections",
          "Average invoice size",
          "Number of clients",
        ],
        a: 1,
      },
      {
        q: "A report keeps breaking every Friday. What is the best first step?",
        o: [
          "Ask someone else to fix it",
          "Find the root cause before changing anything",
          "Rebuild it from scratch",
          "Ignore it until month end",
        ],
        a: 1,
      },
      {
        q: "A customer is unhappy about a late delivery. What should you do first?",
        o: [
          "Explain whose fault it was",
          "Acknowledge it and say what you will do next",
          "Offer a refund immediately",
          "Wait for them to calm down",
        ],
        a: 1,
      },
    ];
    var SAMPLE2 = [
      "Why does this role interest you?",
      "Tell me about a time you owned a problem from start to finish.",
      "How do you handle feedback you disagree with?",
      "Describe a time you put a customer first.",
    ];
    var S = { p1: SAMPLE1.slice(), p2: SAMPLE2.slice() };

    // tabs
    $$(".card[data-part]").forEach(function (card) {
      $$(".tabs button", card).forEach(function (b) {
        b.addEventListener("click", function () {
          $$(".tabs button", card).forEach(function (x) {
            x.classList.toggle("on", x === b);
          });
          $$(".src", card).forEach(function (s) {
            s.classList.toggle(
              "on",
              s.getAttribute("data-for") === b.getAttribute("data-src"),
            );
          });
        });
      });
    });

    function el(tag, cls, text) {
      var e = document.createElement(tag);
      if (cls) e.className = cls;
      if (text != null) e.textContent = text;
      return e;
    }

    var infoDialog = el("dialog", "message-dialog");
    infoDialog.setAttribute("aria-labelledby", "info-title");
    var infoTitle = el("h3");
    infoTitle.id = "info-title";
    var infoCopy = el("p");
    var infoActions = el("div", "message-actions");
    var infoClose = el("button", "text-button", "Close");
    infoClose.type = "button";
    var infoLink = el("a", "btn small", "Start walkthrough");
    infoLink.href = "/walkthrough";
    infoActions.appendChild(infoClose);
    infoActions.appendChild(infoLink);
    infoDialog.appendChild(infoTitle);
    infoDialog.appendChild(infoCopy);
    infoDialog.appendChild(infoActions);
    appRoot.appendChild(infoDialog);
    function showInfo(title, copy, showCta) {
      infoTitle.textContent = title;
      infoCopy.textContent = copy;
      infoLink.hidden = !showCta;
      if (!infoDialog.open) infoDialog.showModal();
    }
    infoClose.addEventListener("click", function () {
      infoDialog.close();
    });
    infoLink.addEventListener("click", function () {
      infoDialog.close();
    });
    $("#signin").addEventListener("click", function () {
      showInfo(
        "Sign-in is not available yet",
        "This product preview does not have accounts. Start now to walk through role and interview setup.",
        true,
      );
    });
    $$("[data-info]").forEach(function (button) {
      button.addEventListener("click", function () {
        var isPrivacy = button.getAttribute("data-info") === "privacy";
        showInfo(
          isPrivacy ? "Privacy in this preview" : "Terms for this preview",
          isPrivacy
            ? "This prototype has no server connection. If you save an email, it stays in this browser’s local storage until you remove it. Interview-preview answers are not recorded or transmitted."
            : "Lumo is a product concept, not a live hiring service. Do not enter real candidate data. The interview preview is illustrative and does not make employment decisions.",
          false,
        );
      });
    });

    function render() {
      var l1 = $("#list1"),
        l2 = $("#list2");
      l1.textContent = "";
      l2.textContent = "";
      if (!S.p1.length) l1.appendChild(el("li", "empty", "No questions yet."));
      S.p1.forEach(function (it, i) {
        var li = el("li"),
          n = el("span", "qn", i + 1),
          b = el("div", "qb", it.q);
        var s = el("small");
        s.appendChild(
          document.createTextNode(
            it.o
              .map(function (o, k) {
                return k === it.a ? "" : LET[k] + ". " + o;
              })
              .filter(Boolean)
              .join("   "),
          ),
        );
        var ans = el("small");
        var bold = el("b", null, LET[it.a] + ". " + it.o[it.a]);
        ans.appendChild(document.createTextNode("Correct: "));
        ans.appendChild(bold);
        b.appendChild(ans);
        b.appendChild(s);
        var x = el("button", "x", "×");
        x.type = "button";
        x.setAttribute("aria-label", "Remove question " + (i + 1));
        x.addEventListener("click", function () {
          S.p1.splice(i, 1);
          update();
        });
        li.appendChild(n);
        li.appendChild(b);
        li.appendChild(x);
        l1.appendChild(li);
      });
      if (!S.p2.length) l2.appendChild(el("li", "empty", "No questions yet."));
      S.p2.forEach(function (q, i) {
        var li = el("li"),
          n = el("span", "qn", i + 1),
          b = el("div", "qb", q);
        var x = el("button", "x", "×");
        x.type = "button";
        x.setAttribute("aria-label", "Remove question " + (i + 1));
        x.addEventListener("click", function () {
          S.p2.splice(i, 1);
          update();
        });
        li.appendChild(n);
        li.appendChild(b);
        li.appendChild(x);
        l2.appendChild(li);
      });
    }

    function fmt(m) {
      return m >= 1
        ? Math.round(m * 10) / 10 + " min"
        : Math.round(m * 60) + " sec";
    }

    function update() {
      var m1 = +$("#r1").value,
        m2 = +$("#r2").value,
        tot = m1 + m2;
      $("#t1").textContent = m1 + " min";
      $("#t2").textContent = m2 + " min";
      $("#total").textContent = tot;
      $("#l1").textContent = m1;
      $("#l2").textContent = m2;
      $("#bar1").style.width = (m1 / tot) * 100 + "%";
      $("#bar2").style.width = (m2 / tot) * 100 + "%";
      $("#n1").textContent = S.p1.length;
      $("#n2").textContent = S.p2.length;
      $("#pq1").textContent = S.p1.length ? fmt(m1 / S.p1.length) : "-";
      $("#pq2").textContent = S.p2.length ? fmt(m2 / S.p2.length) : "-";
      $("#sumRole").textContent = $("#role").value.trim() || "Untitled role";
      var f = $("#from").value,
        to = $("#to").value;
      $("#win").textContent =
        f && to
          ? f + " to " + to
          : f
            ? "From " + f
            : to
              ? "Until " + to
              : "Not set";
      var w = [];
      if (S.p1.length && m1 / S.p1.length < 0.5)
        w.push(
          "Part 1 gives under 30 seconds per question. Add time or remove questions.",
        );
      if (S.p2.length && m2 / S.p2.length < 2)
        w.push(
          "Part 2 gives under 2 minutes per voice question, which leaves little room for follow-ups.",
        );
      if (f && to && to < f) w.push("The window ends before it starts.");
      var wn = $("#warn");
      wn.textContent = w.join(" ");
      wn.classList.toggle("on", w.length > 0);
      render();
    }

    // csv
    function parseCSV(text) {
      var rows = [],
        row = [],
        cur = "",
        q = false;
      for (var i = 0; i < text.length; i++) {
        var c = text[i];
        if (q) {
          if (c === '"') {
            if (text[i + 1] === '"') {
              cur += '"';
              i++;
            } else q = false;
          } else cur += c;
        } else if (c === '"') q = true;
        else if (c === ",") {
          row.push(cur);
          cur = "";
        } else if (c === "\n" || c === "\r") {
          if (c === "\r" && text[i + 1] === "\n") i++;
          row.push(cur);
          rows.push(row);
          row = [];
          cur = "";
        } else cur += c;
      }
      if (cur || row.length) {
        row.push(cur);
        rows.push(row);
      }
      return rows
        .map(function (r) {
          return r.map(function (x) {
            return x.trim();
          });
        })
        .filter(function (r) {
          return r.some(Boolean);
        });
    }
    function readFile(input, cb, msg) {
      var f = input.files[0];
      if (!f) return;
      if (f.size > 1024 * 1024) {
        msg("That file is too large. Keep it under 1 MB.");
        return;
      }
      var r = new FileReader();
      r.onload = function () {
        cb(String(r.result));
      };
      r.onerror = function () {
        msg("Could not read that file. Try another CSV or text file.");
      };
      r.readAsText(f);
    }
    function note(id) {
      return function (m) {
        var e = $(id);
        e.textContent = m;
      };
    }

    $("#file1").addEventListener("change", function () {
      var add = [];
      var bad = 0;
      readFile(
        this,
        function (txt) {
          var rows = parseCSV(txt);
          if (rows.length && /^question/i.test(rows[0][0])) rows.shift();
          rows.forEach(function (r) {
            if (r.length < 6) {
              bad++;
              return;
            }
            var a = LET.indexOf(r[5].toUpperCase().charAt(0));
            if (
              a < 0 ||
              r.slice(1, 5).some(function (x) {
                return !x;
              })
            ) {
              bad++;
              return;
            }
            add.push({ q: r[0], o: r.slice(1, 5), a: a });
          });
          if (add.length) {
            S.p1 = add;
            $$('.card[data-part="1"] .tabs button').forEach(function (b) {
              b.classList.toggle("on", b.getAttribute("data-src") === "upload");
            });
          }
          alert(
            add.length
              ? "Loaded " +
                  add.length +
                  " question" +
                  (add.length === 1 ? "" : "s") +
                  (bad
                    ? ". Skipped " +
                      bad +
                      " row" +
                      (bad === 1 ? "" : "s") +
                      " that did not match the format."
                    : ".")
              : "No questions found. Each row needs: Question, A, B, C, D, Answer.",
          );
          update();
        },
        function (m) {
          alert(m);
        },
      );
    });
    $("#file2").addEventListener("change", function () {
      readFile(
        this,
        function (txt) {
          var rows = parseCSV(txt)
            .map(function (r) {
              return r[0];
            })
            .filter(Boolean);
          if (rows.length && /^question/i.test(rows[0])) rows.shift();
          if (rows.length) S.p2 = rows;
          alert(
            rows.length
              ? "Loaded " +
                  rows.length +
                  " question" +
                  (rows.length === 1 ? "" : "s") +
                  "."
              : "No questions found in that file.",
          );
          update();
        },
        function (m) {
          alert(m);
        },
      );
    });

    // write own
    $("#add1").addEventListener("click", function () {
      var q = $("#q1").value.trim(),
        ins = $$("#opts1 .in"),
        o = ins.map(function (i) {
          return i.value.trim();
        });
      var a = +($("#opts1 input[type=radio]:checked") || { value: 0 }).value,
        m = $("#msg1");
      if (!q) {
        m.textContent = "Write the question first.";
        return;
      }
      if (
        o.some(function (x) {
          return !x;
        })
      ) {
        m.textContent = "Fill in all four options.";
        return;
      }
      S.p1.push({ q: q, o: o, a: a });
      $("#q1").value = "";
      ins.forEach(function (i) {
        i.value = "";
      });
      m.textContent = "Added.";
      update();
    });
    $("#add2").addEventListener("click", function () {
      var q = $("#q2").value.trim(),
        m = $("#msg2");
      if (!q) {
        m.textContent = "Write the question first.";
        return;
      }
      S.p2.push(q);
      $("#q2").value = "";
      m.textContent = "Added.";
      update();
    });
    $("#draft1").addEventListener("click", function () {
      S.p1 = SAMPLE1.slice();
      update();
    });
    $("#draft2").addEventListener("click", function () {
      S.p2 = SAMPLE2.slice();
      update();
    });
    ["#r1", "#r2", "#role", "#from", "#to"].forEach(function (s) {
      $(s).addEventListener("input", update);
    });

    // preview
    var dlg = $("#pvd"),
      pv = $("#pv"),
      timer = null;
    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    function mmss(s) {
      return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2);
    }
    var ORB =
      '<svg class="orb-lg" width="72" height="72" viewBox="0 0 1214 1214" aria-hidden="true"><circle cx="607" cy="607" r="602" fill="#0A0A0A"/><rect x="-75" y="-135" width="150" height="270" rx="75" transform="translate(663 418) rotate(-33)" fill="#fff"/><rect x="-55" y="-125" width="110" height="250" rx="55" transform="translate(945 275) rotate(-33)" fill="#fff"/></svg>';

    function open() {
      var m1 = +$("#r1").value,
        m2 = +$("#r2").value,
        role = $("#role").value.trim() || "this role";
      var answers = [],
        voiceAnswers = 0,
        i1 = 0,
        i2 = 0;
      function shell(top, prog, body) {
        stopTimer();
        pv.textContent = "";
        var t = el("div", "pv-top");
        var l = el("span");
        l.innerHTML = top;
        t.appendChild(l);
        var c = el("button", null, "Close");
        c.type = "button";
        c.addEventListener("click", function () {
          stopTimer();
          dlg.close();
        });
        t.appendChild(c);
        var p = el("div", "pv-prog"),
          pi = el("i");
        pi.style.width = prog + "%";
        p.appendChild(pi);
        pv.appendChild(t);
        pv.appendChild(p);
        pv.appendChild(body);
      }
      function intro() {
        var b = el("div", "grow");
        b.innerHTML = ORB;
        b.appendChild(el("h4", null, "Interview for " + role));
        b.appendChild(
          el(
            "p",
            "d",
            "Lumo is an AI. This interview has two parts and takes about " +
              (m1 + m2) +
              " minutes. A person makes every hiring decision.",
          ),
        );
        b.appendChild(
          el(
            "p",
            "d",
            "This local preview does not record or send your answers.",
          ),
        );
        b.appendChild(
          el(
            "p",
            "d",
            "Part 1: " +
              S.p1.length +
              " multiple choice question" +
              (S.p1.length === 1 ? "" : "s") +
              " (" +
              m1 +
              " min)",
          ),
        );
        b.appendChild(
          el(
            "p",
            "d",
            "Part 2: voice interview, " +
              S.p2.length +
              " question" +
              (S.p2.length === 1 ? "" : "s") +
              " (" +
              m2 +
              " min)",
          ),
        );
        var w = el("div");
        w.style.display = "flex";
        w.style.flexDirection = "column";
        w.appendChild(b);
        var go = el("button", "btn", "I agree, start");
        go.type = "button";
        go.addEventListener("click", function () {
          S.p1.length ? part1() : part2intro();
        });
        w.appendChild(go);
        w.style.flex = "1";
        shell("Invitation", 0, w);
      }
      function withTimer(secs, label, onEnd) {
        var left = secs,
          out = pv.querySelector(".timer");
        timer = setInterval(function () {
          left--;
          if (out) out.textContent = label + " " + mmss(Math.max(left, 0));
          if (left <= 0) {
            stopTimer();
            onEnd();
          }
        }, 1000);
      }
      function part1() {
        var it = S.p1[i1],
          sel = -1,
          w = el("div");
        w.style.cssText = "display:flex;flex-direction:column;flex:1";
        w.appendChild(el("h4", null, it.q));
        var list = el("div", "grow");
        it.o.forEach(function (o, k) {
          var c = el("button", "choice");
          c.type = "button";
          c.appendChild(el("b", null, LET[k]));
          c.appendChild(document.createTextNode(o));
          c.addEventListener("click", function () {
            sel = k;
            $$(".choice", list).forEach(function (x, j) {
              x.classList.toggle("sel", j === k);
            });
            nx.disabled = false;
          });
          list.appendChild(c);
        });
        w.appendChild(list);
        var nx = el(
          "button",
          "btn",
          i1 === S.p1.length - 1 ? "Finish part 1" : "Next",
        );
        nx.type = "button";
        nx.disabled = true;
        nx.addEventListener("click", function () {
          answers.push(sel === it.a);
          i1++;
          i1 < S.p1.length ? part1() : part2intro();
        });
        w.appendChild(nx);
        shell(
          "Part 1 of 2 &middot; Question " +
            (i1 + 1) +
            " of " +
            S.p1.length +
            ' &middot; <span class="timer"></span>',
          (i1 / S.p1.length) * 50,
          w,
        );
        if (i1 === 0 && !part1.t) {
          part1.t = 1;
        }
        var secs = Math.round(m1 * 60 - (i1 * m1 * 60) / S.p1.length);
        var o = pv.querySelector(".timer");
        o.textContent = "Left " + mmss(secs);
        withTimer(secs, "Left", function () {
          while (answers.length < S.p1.length) answers.push(false);
          part2intro();
        });
      }
      function part2intro() {
        stopTimer();
        var w = el("div");
        w.style.cssText =
          "display:flex;flex-direction:column;flex:1;text-align:center";
        var b = el("div", "grow");
        b.innerHTML = ORB;
        b.appendChild(el("h4", null, "Part 2: a conversation with Lumo"));
        b.appendChild(
          el(
            "p",
            "d",
            "Use the text box for a demo response. Read-aloud is available when your browser supports it; no audio is recorded or sent.",
          ),
        );
        w.appendChild(b);
        var go = el("button", "btn", "Start voice interview");
        go.type = "button";
        go.addEventListener("click", function () {
          S.p2.length ? part2() : done();
        });
        w.appendChild(go);
        shell("Part 2 of 2", 50, w);
      }
      function part2() {
        var w = el("div");
        w.style.cssText =
          "display:flex;flex-direction:column;flex:1;text-align:center";
        var b = el("div", "grow");
        b.innerHTML = ORB;
        var wv = el("div", "wave");
        for (var k = 0; k < 15; k++) wv.appendChild(el("i"));
        b.appendChild(wv);
        b.appendChild(
          el("p", "d", "QUESTION " + (i2 + 1) + " OF " + S.p2.length),
        );
        b.appendChild(el("h4", null, S.p2[i2]));
        var response = el("textarea");
        response.setAttribute(
          "aria-label",
          "Demo response to question " + (i2 + 1),
        );
        response.placeholder = "Type a response for this local demo…";
        b.appendChild(response);
        var feedback = el("p", "d");
        feedback.setAttribute("role", "status");
        b.appendChild(feedback);
        w.appendChild(b);
        var actions = el("div", "pv-actions");
        var repeat = el("button", "btn sec", "Read question aloud");
        repeat.type = "button";
        repeat.addEventListener("click", function () {
          if (
            !("speechSynthesis" in window) ||
            !("SpeechSynthesisUtterance" in window)
          ) {
            feedback.textContent =
              "Read-aloud is not supported in this browser. You can read and type your answer instead.";
            return;
          }
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(new SpeechSynthesisUtterance(S.p2[i2]));
          feedback.textContent = "Reading the question aloud.";
        });
        var skip = el("button", "btn sec", "Skip question");
        skip.type = "button";
        var nx = el(
          "button",
          "btn",
          i2 === S.p2.length - 1
            ? "Finish interview"
            : "Save demo response and continue",
        );
        nx.type = "button";
        function advance(saveResponse) {
          if (saveResponse && response.value.trim()) voiceAnswers++;
          if ("speechSynthesis" in window) window.speechSynthesis.cancel();
          i2++;
          i2 < S.p2.length ? part2() : done();
        }
        skip.addEventListener("click", function () {
          advance(false);
        });
        nx.addEventListener("click", function () {
          advance(true);
        });
        actions.appendChild(repeat);
        actions.appendChild(skip);
        actions.appendChild(nx);
        w.appendChild(actions);
        shell(
          "Part 2 of 2 &middot; Question " +
            (i2 + 1) +
            " of " +
            S.p2.length +
            ' &middot; <span class="timer"></span>',
          50 + (i2 / S.p2.length) * 50,
          w,
        );
        var secs = Math.round(m2 * 60 - (i2 * m2 * 60) / S.p2.length);
        pv.querySelector(".timer").textContent = "Left " + mmss(secs);
        withTimer(secs, "Left", function () {
          advance(true);
        });
      }
      function done() {
        stopTimer();
        var score = answers.filter(Boolean).length;
        var w = el("div");
        w.style.cssText =
          "display:flex;flex-direction:column;flex:1;text-align:center";
        var b = el("div", "grow");
        b.innerHTML = ORB;
        b.appendChild(el("h4", null, "Thank you"));
        b.appendChild(
          el(
            "p",
            "d",
            "This local preview did not record audio or send any answers to a hiring team.",
          ),
        );
        if (S.p1.length)
          b.appendChild(
            el(
              "p",
              "d",
              "Demo result, Part 1: " +
                score +
                " of " +
                S.p1.length +
                " correct. This feeds the role skills score.",
            ),
          );
        b.appendChild(
          el(
            "p",
            "d",
            "Typed response entered for " +
              voiceAnswers +
              " of " +
              S.p2.length +
              " voice questions. Responses are not saved.",
          ),
        );
        w.appendChild(b);
        var again = el("button", "btn", "Close");
        again.type = "button";
        again.addEventListener("click", function () {
          dlg.close();
        });
        w.appendChild(again);
        shell("Complete", 100, w);
      }
      intro();
      if (!dlg.open) dlg.showModal();
    }
    $("#preview").addEventListener("click", function () {
      if (!S.p1.length && !S.p2.length) {
        alert("Add at least one question first.");
        return;
      }
      open();
    });
    dlg.addEventListener("close", function () {
      stopTimer();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    });

    update();

  })();
}
