"use client";

import { useEffect } from "react";
import { mountInteractions } from "./interactions";

export default function LumoApp() {
  useEffect(() => {
    mountInteractions();
  }, []);

  return (
    <div id="lumo-app">
      {"\n\n"}
      <nav aria-label={"Main"}>
        {"\n  "}
        <div className={"wrap nav-in"}>
          {"\n    "}
          <a className={"brand"} href={"#top"} aria-label={"Lumo home"}>
            {"\n      "}
            <svg
              width={"26"}
              height={"26"}
              viewBox={"0 0 1214 1214"}
              aria-hidden={"true"}
            >
              <circle cx={"607"} cy={"607"} r={"602"} fill={"#0A0A0A"}></circle>
              <rect
                x={"-75"}
                y={"-135"}
                width={"150"}
                height={"270"}
                rx={"75"}
                transform={"translate(663 418) rotate(-33)"}
                fill={"#fff"}
              ></rect>
              <rect
                x={"-55"}
                y={"-125"}
                width={"110"}
                height={"250"}
                rx={"55"}
                transform={"translate(945 275) rotate(-33)"}
                fill={"#fff"}
              ></rect>
            </svg>
            {"\n      Lumo\n    "}
          </a>
          {"\n    "}
          <div className={"nav-links"}>
            {"\n      "}
            <a href={"#how"}>{"How it works"}</a>
            {"\n      "}
            <a href={"#features"}>{"Features"}</a>
            {"\n      "}
            <a href={"#builder"}>{"Try it"}</a>
            {"\n      "}
            <a href={"#fairness"}>{"Fairness"}</a>
            {"\n      "}
            <a href={"#faq"}>{"FAQ"}</a>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"nav-cta"}>
            {"\n      "}
            <button className={"text-button"} type={"button"} id={"signin"}>
              {"Sign in"}
            </button>
            {"\n      "}
            <a className={"btn small"} href={"#join"}>
              {"Get early access"}
            </a>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </nav>
      {"\n\n"}
      <main id={"top"}>
        {"\n"}
        <header className={"hero"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <p className={"eyebrow"}>{"AI hiring interviewer"}</p>
            {"\n    "}
            <h1>
              {"Every candidate,"}
              <br />
              {"understood."}
            </h1>
            {"\n    "}
            <p className={"lead"}>
              {
                "Lumo runs a two-part interview: quick objective questions, then a voice conversation. It scores each candidate against your values and the job description. You review a ranked shortlist, and you make every decision."
              }
            </p>
            {"\n    "}
            <div className={"hero-cta"}>
              {"\n      "}
              <a className={"btn"} href={"#join"}>
                {"Get early access"}
              </a>
              {"\n      "}
              <a className={"btn ghost"} href={"#how"}>
                {"See how it works ›"}
              </a>
              <button className={"btn sec"} type={"button"} id={"start-tour"}>
                {"Take the product tour"}
              </button>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div className={"stage"}>
              {"\n      "}
              <div className={"float l"}>
                {"\n        "}
                <small>{"LUMO IS ASKING"}</small>
                {
                  "\n        Tell me about a time you owned a problem.\n        "
                }
                <div className={"wave"} aria-hidden={"true"}>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                {"\n      "}
              </div>
              {"\n\n      "}
              <div
                className={"phone"}
                role={"img"}
                aria-label={
                  "Candidate scorecard for Chidi Eze showing an overall score of 88 and scores by criterion"
                }
              >
                {"\n        "}
                <div className={"phone-screen"}>
                  {"\n          "}
                  <div className={"pt"}>{"Chidi Eze"}</div>
                  {"\n          "}
                  <div className={"ps"}>
                    {"Operations Analyst · 18 min interview"}
                  </div>
                  {"\n          "}
                  <div className={"pcard"}>
                    {"\n            "}
                    <div className={"pscore"}>
                      <b>{"88"}</b>
                      <div>
                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                          {"Strong match"}
                        </div>
                        <div style={{ fontSize: "11px", color: "#6C6C70" }}>
                          {"Lumo's suggestion, 9 answers"}
                        </div>
                      </div>
                    </div>
                    {"\n            "}
                    <div style={{ marginTop: "8px" }}>
                      {"\n              "}
                      <div className={"pbar"}>
                        <span>{"Role skills"}</span>
                        <i style={{ "--w": "91%" }}></i>
                        <em>{"91"}</em>
                      </div>
                      {"\n              "}
                      <div className={"pbar"}>
                        <span>{"Values"}</span>
                        <i style={{ "--w": "86%" }}></i>
                        <em>{"86"}</em>
                      </div>
                      {"\n              "}
                      <div className={"pbar"}>
                        <span>{"Communication"}</span>
                        <i style={{ "--w": "84%" }}></i>
                        <em>{"84"}</em>
                      </div>
                      {"\n              "}
                      <div className={"pbar"}>
                        <span>{"Experience"}</span>
                        <i style={{ "--w": "79%" }}></i>
                        <em>{"79"}</em>
                      </div>
                      {"\n            "}
                    </div>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"pev"}>
                    <b>{"Ownership"}</b>
                    <span className={"tag g"}>{"High"}</span>
                    <br />
                    {
                      "“I rebuilt the reconciliation sheet myself and told finance before they asked.”"
                    }
                  </div>
                  {"\n          "}
                  <div className={"pev"}>
                    <b>{"Customer first"}</b>
                    <span className={"tag o"}>{"Not shown"}</span>
                    <br />
                    {"No example given. Worth asking in the next round."}
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n\n      "}
              <div className={"float r"}>
                {"\n        "}
                <small>{"SUGGESTION, NOT A DECISION"}</small>
                {"\n        "}
                <b>{"Advance to next round?"}</b>
                <br />
                {"\n        "}
                <span style={{ color: "var(--muted)" }}>
                  {"A person reviews every scorecard."}
                </span>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </header>
        {"\n\n"}
        <section id={"how"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"center"}>
              {"\n      "}
              <p className={"eyebrow"}>{"How it works"}</p>
              {"\n      "}
              <h2>
                {"Set up once."}
                <br />
                {"Interview everyone."}
              </h2>
              {"\n      "}
              <p className={"lead"}>
                {
                  "First-round interviews take weeks. Lumo runs them in days, the same way for every candidate."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"steps"}>
              {"\n      "}
              <div className={"step"}>
                <div className={"n"}>{"1"}</div>
                <h3>{"Set up the role"}</h3>
                <p>
                  {
                    "Import the job description, pick your values and set the time. Use Lumo's questions, upload your own or write them yourself."
                  }
                </p>
              </div>
              {"\n      "}
              <div className={"step"}>
                <div className={"n"}>{"2"}</div>
                <h3>{"Two parts, one link"}</h3>
                <p>
                  {
                    "Part 1 is objective questions, scored automatically. Part 2 is a voice interview where Lumo asks the same questions of everyone and follows up when an answer is vague."
                  }
                </p>
              </div>
              {"\n      "}
              <div className={"step"}>
                <div className={"n"}>{"3"}</div>
                <h3>{"Review and decide"}</h3>
                <p>
                  {
                    "See a ranked shortlist with a score for each criterion and the exact words behind it. You advance, hold or decline."
                  }
                </p>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section id={"features"} className={"alt"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"center"}>
              {"\n      "}
              <p className={"eyebrow"}>{"Features"}</p>
              {"\n      "}
              <h2>
                {"Built for evidence,"}
                <br />
                {"not gut feeling."}
              </h2>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"grid"}>
              {"\n      "}
              <div className={"tile wide"}>
                {"\n        "}
                <div>
                  {"\n          "}
                  <div className={"ic b"}>
                    <svg
                      width={"24"}
                      height={"24"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      aria-hidden={"true"}
                    >
                      <rect
                        x={"9"}
                        y={"3"}
                        width={"6"}
                        height={"12"}
                        rx={"3"}
                      ></rect>
                      <path d={"M5 11a7 7 0 0 0 14 0M12 18v3"}></path>
                    </svg>
                  </div>
                  {"\n          "}
                  <h3>{"A voice interviewer that listens"}</h3>
                  {"\n          "}
                  <p>
                    {
                      "Lumo speaks each question, waits for the answer and asks a follow-up when it matters. Candidates can repeat, skip or stop at any time, and can type instead if they prefer."
                    }
                  </p>
                  {"\n        "}
                </div>
                {"\n        "}
                <div className={"mini"}>
                  <b
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      letterSpacing: ".3px",
                    }}
                  >
                    {"LUMO"}
                  </b>
                  <q>{"How long does that take each week?"}</q>
                  <div className={"who"} style={{ marginTop: "0" }}>
                    {"Follow-up"}
                  </div>
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"tile"}>
                {"\n        "}
                <div className={"ic g"}>
                  <svg
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M5 20V11M12 20V5M19 20v-6"}></path>
                  </svg>
                </div>
                {"\n        "}
                <h3>{"Scorecards from your values"}</h3>
                {"\n        "}
                <p>
                  {
                    "Choose the values and skills that matter. Every answer is scored against them."
                  }
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"tile"}>
                {"\n        "}
                <div className={"ic o"}>
                  <svg
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M5 5h14v11H10l-5 4z"}></path>
                  </svg>
                </div>
                {"\n        "}
                <h3>{"Every score shows its quote"}</h3>
                {"\n        "}
                <p>
                  {
                    "No quote, no score. You see the candidate's own words behind each number."
                  }
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"tile"}>
                {"\n        "}
                <div className={"ic v"}>
                  <svg
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <circle cx={"12"} cy={"12"} r={"9"}></circle>
                    <path d={"M12 8v5M12 16.5v.5"}></path>
                  </svg>
                </div>
                {"\n        "}
                <h3>{"Gaps, not guesses"}</h3>
                {"\n        "}
                <p>
                  {
                    "If an answer doesn't show a value, Lumo flags it for the next round instead of guessing."
                  }
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"tile"}>
                {"\n        "}
                <div className={"ic r"}>
                  <svg
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path
                      d={"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"}
                    ></path>
                    <circle cx={"12"} cy={"12"} r={"3"}></circle>
                  </svg>
                </div>
                {"\n        "}
                <h3>{"Listen in, take over"}</h3>
                {"\n        "}
                <p>
                  {
                    "Watch an interview live, muted, and step in with one tap whenever you want."
                  }
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"tile full"}>
                {"\n        "}
                <div className={"ic k"}>
                  <svg
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <circle cx={"9"} cy={"8"} r={"3.2"}></circle>
                    <path
                      d={
                        "M3 19a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M18 19a5 5 0 0 0-3-4.5"
                      }
                    ></path>
                  </svg>
                </div>
                {"\n        "}
                <div>
                  <h3>{"A ranked shortlist"}</h3>
                  {"\n        "}
                  <p>
                    {
                      "Compare candidates side by side and move the best ones forward in minutes."
                    }
                  </p>
                </div>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n\n"}
        <section id={"builder"} className={"alt"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"center"}>
              {"\n      "}
              <p className={"eyebrow"}>{"Interview builder"}</p>
              {"\n      "}
              <h2>
                {"Two parts."}
                <br />
                {"Your questions, your time."}
              </h2>
              {"\n      "}
              <p className={"lead"}>
                {
                  "Start with quick objective questions, then let Lumo interview by voice. Set the time for each part, and use Lumo's questions, upload yours or write your own."
                }
              </p>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div className={"builder"}>
              {"\n      "}
              <div>
                {"\n        "}
                <div className={"card"}>
                  {"\n          "}
                  <h3>{"Role and schedule"}</h3>
                  {"\n          "}
                  <p className={"sub"}>
                    {"Candidates can start any time inside this window."}
                  </p>
                  {"\n          "}
                  <label className={"field"} htmlFor={"role"}>
                    {"Role"}
                  </label>
                  {"\n          "}
                  <input
                    className={"in"}
                    id={"role"}
                    defaultValue={"Operations Analyst"}
                    autoComplete={"off"}
                  />
                  {"\n          "}
                  <div className={"row2"}>
                    {"\n            "}
                    <div>
                      <label className={"field"} htmlFor={"from"}>
                        {"Open from"}
                      </label>
                      <input className={"in"} type={"date"} id={"from"} />
                    </div>
                    {"\n            "}
                    <div>
                      <label className={"field"} htmlFor={"to"}>
                        {"Open until"}
                      </label>
                      <input className={"in"} type={"date"} id={"to"} />
                    </div>
                    {"\n          "}
                  </div>
                  {"\n        "}
                </div>
                {"\n\n        "}
                <div className={"card"} data-part={"1"}>
                  {"\n          "}
                  <span className={"pill"}>{"Part 1"}</span>
                  {"\n          "}
                  <h3>{"Objective questions"}</h3>
                  {"\n          "}
                  <p className={"sub"}>
                    {
                      "Multiple choice. Scored automatically and counted toward role skills."
                    }
                  </p>
                  {"\n          "}
                  <label className={"field"} htmlFor={"r1"}>
                    {"Time for this part "}
                    <output id={"t1"}>{"15 min"}</output>
                  </label>
                  {"\n          "}
                  <input
                    type={"range"}
                    id={"r1"}
                    min={"5"}
                    max={"30"}
                    step={"5"}
                    defaultValue={"15"}
                  />
                  {"\n          "}
                  <div
                    className={"tabs"}
                    role={"group"}
                    aria-label={"Part 1 question source"}
                  >
                    {"\n            "}
                    <button type={"button"} className={"on"} data-src={"draft"}>
                      {"Lumo drafts"}
                    </button>
                    {"\n            "}
                    <button type={"button"} data-src={"upload"}>
                      {"Upload"}
                    </button>
                    {"\n            "}
                    <button type={"button"} data-src={"own"}>
                      {"Write my own"}
                    </button>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"src on"} data-for={"draft"}>
                    {"\n            "}
                    <p className={"hint"} style={{ marginTop: "0" }}>
                      {
                        "Lumo drafts questions from the job description and your values. These are examples."
                      }
                    </p>
                    {"\n            "}
                    <button
                      type={"button"}
                      className={"btn sec sm"}
                      id={"draft1"}
                      style={{ marginTop: "12px" }}
                    >
                      {"Redraft examples"}
                    </button>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"src"} data-for={"upload"}>
                    {"\n            "}
                    <input
                      className={"in"}
                      type={"file"}
                      id={"file1"}
                      accept={".csv,.txt"}
                    />
                    {"\n            "}
                    <p className={"hint"}>
                      {"CSV or text file, one question per row: "}
                      <code>{"Question, A, B, C, D, Answer"}</code>
                      {
                        ". The answer is a letter, A to D. Your file stays in this browser."
                      }
                    </p>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"src"} data-for={"own"}>
                    {"\n            "}
                    <label
                      className={"field"}
                      htmlFor={"q1"}
                      style={{ marginTop: "0" }}
                    >
                      {"Question"}
                    </label>
                    {"\n            "}
                    <textarea
                      className={"ta"}
                      id={"q1"}
                      placeholder={
                        "e.g. Which metric best shows billing accuracy?"
                      }
                    ></textarea>
                    {"\n            "}
                    <div className={"opts"} id={"opts1"}>
                      {"\n              "}
                      <label className={"opt"}>
                        <input
                          type={"radio"}
                          name={"ans1"}
                          defaultValue={"0"}
                          defaultChecked={true}
                        />
                        <input className={"in"} placeholder={"Option A"} />
                      </label>
                      {"\n              "}
                      <label className={"opt"}>
                        <input
                          type={"radio"}
                          name={"ans1"}
                          defaultValue={"1"}
                        />
                        <input className={"in"} placeholder={"Option B"} />
                      </label>
                      {"\n              "}
                      <label className={"opt"}>
                        <input
                          type={"radio"}
                          name={"ans1"}
                          defaultValue={"2"}
                        />
                        <input className={"in"} placeholder={"Option C"} />
                      </label>
                      {"\n              "}
                      <label className={"opt"}>
                        <input
                          type={"radio"}
                          name={"ans1"}
                          defaultValue={"3"}
                        />
                        <input className={"in"} placeholder={"Option D"} />
                      </label>
                      {"\n            "}
                    </div>
                    {"\n            "}
                    <p className={"hint"} style={{ margin: "0 0 12px" }}>
                      {"Select the circle next to the correct answer."}
                    </p>
                    {"\n            "}
                    <button
                      type={"button"}
                      className={"btn sec sm"}
                      id={"add1"}
                    >
                      {"Add question"}
                    </button>
                    {"\n            "}
                    <span
                      className={"hint"}
                      id={"msg1"}
                      role={"status"}
                      style={{ marginLeft: "10px" }}
                    ></span>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <ol className={"qlist"} id={"list1"}></ol>
                  {"\n        "}
                </div>
                {"\n\n        "}
                <div className={"card"} data-part={"2"}>
                  {"\n          "}
                  <span className={"pill v"}>{"Part 2"}</span>
                  {"\n          "}
                  <h3>{"Voice interview"}</h3>
                  {"\n          "}
                  <p className={"sub"}>
                    {
                      "Lumo asks these out loud, listens and follows up on vague answers."
                    }
                  </p>
                  {"\n          "}
                  <label className={"field"} htmlFor={"r2"}>
                    {"Time for this part "}
                    <output id={"t2"}>{"20 min"}</output>
                  </label>
                  {"\n          "}
                  <input
                    type={"range"}
                    id={"r2"}
                    min={"5"}
                    max={"45"}
                    step={"5"}
                    defaultValue={"20"}
                  />
                  {"\n          "}
                  <div
                    className={"tabs"}
                    role={"group"}
                    aria-label={"Part 2 question source"}
                  >
                    {"\n            "}
                    <button type={"button"} className={"on"} data-src={"draft"}>
                      {"Lumo drafts"}
                    </button>
                    {"\n            "}
                    <button type={"button"} data-src={"upload"}>
                      {"Upload"}
                    </button>
                    {"\n            "}
                    <button type={"button"} data-src={"own"}>
                      {"Write my own"}
                    </button>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"src on"} data-for={"draft"}>
                    {"\n            "}
                    <p className={"hint"} style={{ marginTop: "0" }}>
                      {
                        "Lumo drafts open questions that probe your values. These are examples."
                      }
                    </p>
                    {"\n            "}
                    <button
                      type={"button"}
                      className={"btn sec sm"}
                      id={"draft2"}
                      style={{ marginTop: "12px" }}
                    >
                      {"Redraft examples"}
                    </button>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"src"} data-for={"upload"}>
                    {"\n            "}
                    <input
                      className={"in"}
                      type={"file"}
                      id={"file2"}
                      accept={".csv,.txt"}
                    />
                    {"\n            "}
                    <p className={"hint"}>
                      {
                        "Text or CSV file with one question per line. Your file stays in this browser."
                      }
                    </p>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"src"} data-for={"own"}>
                    {"\n            "}
                    <label
                      className={"field"}
                      htmlFor={"q2"}
                      style={{ marginTop: "0" }}
                    >
                      {"Question"}
                    </label>
                    {"\n            "}
                    <textarea
                      className={"ta"}
                      id={"q2"}
                      placeholder={
                        "e.g. Tell me about a time you put a customer first."
                      }
                    ></textarea>
                    {"\n            "}
                    <div style={{ marginTop: "12px" }}>
                      <button
                        type={"button"}
                        className={"btn sec sm"}
                        id={"add2"}
                      >
                        {"Add question"}
                      </button>
                      <span
                        className={"hint"}
                        id={"msg2"}
                        role={"status"}
                        style={{ marginLeft: "10px" }}
                      ></span>
                    </div>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <ol className={"qlist"} id={"list2"}></ol>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n\n      "}
              <aside className={"summary card"} aria-label={"Session summary"}>
                {"\n        "}
                <h3>{"Your session"}</h3>
                {"\n        "}
                <p className={"sub"} id={"sumRole"}>
                  {"Operations Analyst"}
                </p>
                {"\n        "}
                <div className={"big"}>
                  <span id={"total"}>{"35"}</span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "var(--muted)",
                    }}
                  >
                    {" min"}
                  </span>
                </div>
                {"\n        "}
                <div className={"bar"} aria-hidden={"true"}>
                  <i className={"b1"} id={"bar1"}></i>
                  <i className={"b2"} id={"bar2"}></i>
                </div>
                {"\n        "}
                <div className={"legend"}>
                  <span style={{ "--c": "#0071E3" }}>
                    {"Part 1 · "}
                    <b id={"l1"}>{"15"}</b>
                    {" min"}
                  </span>
                  <span style={{ "--c": "#7C5CE0" }}>
                    {"Part 2 · "}
                    <b id={"l2"}>{"20"}</b>
                    {" min"}
                  </span>
                </div>
                {"\n        "}
                <div className={"stats"}>
                  {"\n          "}
                  <div className={"stat"}>
                    <span>{"Objective questions"}</span>
                    <span id={"n1"}>{"0"}</span>
                  </div>
                  {"\n          "}
                  <div className={"stat"}>
                    <span>{"Time per objective question"}</span>
                    <span id={"pq1"}>{"-"}</span>
                  </div>
                  {"\n          "}
                  <div className={"stat"}>
                    <span>{"Voice questions"}</span>
                    <span id={"n2"}>{"0"}</span>
                  </div>
                  {"\n          "}
                  <div className={"stat"}>
                    <span>{"Time per voice question"}</span>
                    <span id={"pq2"}>{"-"}</span>
                  </div>
                  {"\n          "}
                  <div className={"stat"}>
                    <span>{"Open window"}</span>
                    <span id={"win"}>{"Not set"}</span>
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div className={"warn"} id={"warn"} role={"status"}></div>
                {"\n        "}
                <button type={"button"} className={"btn"} id={"preview"}>
                  {"Preview as a candidate"}
                </button>
                {"\n        "}
                <p className={"hint"} style={{ textAlign: "center" }}>
                  {
                    "Interview answers stay in this preview. The early-access email is stored only in this browser."
                  }
                </p>
                {"\n      "}
              </aside>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <dialog id={"pvd"} aria-label={"Candidate preview"}>
          <div className={"pv"} id={"pv"}></div>
        </dialog>
        {"\n\n"}
        <section id={"fairness"} className={"dark"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <p className={"eyebrow"}>{"Fairness and privacy"}</p>
            {"\n    "}
            <h2>
              {"Lumo suggests."}
              <br />
              {"People decide."}
            </h2>
            {"\n    "}
            <p
              className={"lead"}
              style={{ maxWidth: "640px", marginTop: "18px" }}
            >
              {
                "Hiring is high stakes, so Lumo is built to be explainable, consistent and honest with candidates."
              }
            </p>
            {"\n    "}
            <div className={"rules"}>
              {"\n      "}
              <div className={"rule"}>
                <b>{"A person makes every decision"}</b>
                <span>
                  {"Lumo never rejects or advances a candidate on its own."}
                </span>
              </div>
              {"\n      "}
              <div className={"rule"}>
                <b>{"Same questions for everyone"}</b>
                <span>
                  {
                    "Every candidate for a role gets the same set, so comparisons are fair."
                  }
                </span>
              </div>
              {"\n      "}
              <div className={"rule"}>
                <b>{"Job-related signals only"}</b>
                <span>
                  {
                    "Name, age, gender, accent, voice and background are never used in scoring."
                  }
                </span>
              </div>
              {"\n      "}
              <div className={"rule"}>
                <b>{"Always disclosed"}</b>
                <span>
                  {
                    "Candidates hear that Lumo is an AI and consent before recording begins."
                  }
                </span>
              </div>
              {"\n      "}
              <div className={"rule"}>
                <b>{"Candidates keep control"}</b>
                <span>
                  {
                    "They can review their answers, ask for a human, or delete their recording."
                  }
                </span>
              </div>
              {"\n      "}
              <div className={"rule"}>
                <b>{"Auditable by design"}</b>
                <span>
                  {
                    "Every score and every human decision is logged, with bias testing before each release."
                  }
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section id={"faq"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"center"}>
              {"\n      "}
              <p className={"eyebrow"}>{"Questions"}</p>
              {"\n      "}
              <h2>{"Good to know."}</h2>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"faq"}>
              {"\n      "}
              <details open={true}>
                <summary>{"Does Lumo decide who gets hired?"}</summary>
                <p>
                  {
                    "No. Lumo scores answers and ranks candidates as a starting point. A person reads each scorecard and decides whether to advance, hold or decline."
                  }
                </p>
              </details>
              {"\n      "}
              <details>
                <summary>{"What do candidates need to take part?"}</summary>
                <p>
                  {
                    "Only a link and a phone or laptop with a microphone. There is no account to create, and they can type their answers if they prefer."
                  }
                </p>
              </details>
              {"\n      "}
              <details>
                <summary>{"How does Lumo score a candidate?"}</summary>
                <p>
                  {
                    "It compares each answer with the scorecard you set up: skills from the job description and the company values you chose. Each score links to the quote that supports it."
                  }
                </p>
              </details>
              {"\n      "}
              <details>
                <summary>{"How do you keep scoring fair?"}</summary>
                <p>
                  {
                    "Scores use only what candidates say, never name, age, gender, accent or background. We test for adverse impact, keep an audit log and plan an independent bias audit before launch."
                  }
                </p>
              </details>
              {"\n      "}
              <details>
                <summary>
                  {"Can candidates opt out of the AI interview?"}
                </summary>
                <p>
                  {
                    "Yes. We are designing for candidates to ask for a human interviewer, and for them to delete their recording at any time."
                  }
                </p>
              </details>
              {"\n      "}
              <details>
                <summary>{"Can I use my own questions?"}</summary>
                <p>
                  {
                    "Yes. For both parts you can use Lumo's drafts, upload a file, or write questions yourself, and you choose how much time each part gets."
                  }
                </p>
              </details>
              {"\n      "}
              <details>
                <summary>{"When can I try it?"}</summary>
                <p>
                  {
                    "Lumo is in design and private alpha planning. Join the early access list and we will be in touch."
                  }
                </p>
              </details>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section id={"join"} className={"alt cta"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <svg
              className={"orb"}
              width={"72"}
              height={"72"}
              viewBox={"0 0 1214 1214"}
              aria-hidden={"true"}
            >
              <circle cx={"607"} cy={"607"} r={"602"} fill={"#0A0A0A"}></circle>
              <rect
                x={"-75"}
                y={"-135"}
                width={"150"}
                height={"270"}
                rx={"75"}
                transform={"translate(663 418) rotate(-33)"}
                fill={"#fff"}
              ></rect>
              <rect
                x={"-55"}
                y={"-125"}
                width={"110"}
                height={"250"}
                rx={"55"}
                transform={"translate(945 275) rotate(-33)"}
                fill={"#fff"}
              ></rect>
            </svg>
            {"\n    "}
            <h2>{"Meet Lumo."}</h2>
            {"\n    "}
            <p
              className={"lead"}
              style={{ maxWidth: "560px", margin: "16px auto 0" }}
            >
              {"Get early access and hire with evidence."}
            </p>
            {"\n    "}
            <form className={"form"} id={"join-form"}>
              {"\n      "}
              <label
                htmlFor={"email"}
                style={{ position: "absolute", left: "-9999px" }}
              >
                {"Work email"}
              </label>
              {"\n      "}
              <input
                id={"email"}
                type={"email"}
                placeholder={"Work email"}
                required={true}
                autoComplete={"email"}
              />
              {"\n      "}
              <button className={"btn"} type={"submit"}>
                {"Save my interest"}
              </button>
              {"\n    "}
            </form>
            {"\n    "}
            <p
              className={"note"}
              id={"note"}
              role={"status"}
              aria-live={"polite"}
            ></p>
            <button
              className={"text-button local-remove"}
              type={"button"}
              id={"remove-interest"}
              hidden={true}
            >
              {"Remove saved interest from this browser"}
            </button>
            <p className={"hint"}>
              {
                "Your email is stored only in this browser preview and is not sent to Lumo."
              }
            </p>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n"}
      </main>
      {"\n\n"}
      <footer>
        {"\n  "}
        <div className={"wrap"}>
          {"\n    "}
          <p className={"fine"}>
            {
              "Lumo is an AI interviewer. It provides suggestions and evidence to support human hiring decisions and does not make employment decisions. This page describes a product in design; features and availability may change."
            }
          </p>
          {"\n    "}
          <div className={"foot"}>
            {"\n      "}
            <span>{"© 2026 Lumo"}</span>
            {"\n      "}
            <div className={"links"}>
              <button
                className={"text-button"}
                type={"button"}
                data-info={"privacy"}
              >
                {"Privacy"}
              </button>
              <button
                className={"text-button"}
                type={"button"}
                data-info={"terms"}
              >
                {"Terms"}
              </button>
              <a href={"#join"}>{"Contact"}</a>
            </div>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </footer>
      {"\n\n\n"}
    </div>
  );
}
