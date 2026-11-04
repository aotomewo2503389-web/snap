"use client";

import { useState } from "react";

const steps = ["Role & schedule", "Interview format", "Review & preview"];
const questionSources = ["Lumo drafts", "My questions"];

function SourcePicker({ label, selected, onSelect }) {
  return (
    <div className="walkthrough-source">
      <span className="walkthrough-label">{label}</span>
      <div className="walkthrough-segmented" role="group" aria-label={label}>
        {questionSources.map((source) => (
          <button
            key={source}
            className={selected === source ? "selected" : ""}
            type="button"
            aria-pressed={selected === source}
            onClick={() => onSelect(source)}
          >
            {source}
          </button>
        ))}
      </div>
    </div>
  );
}

function GuidedPointer({ number, children }) {
  return (
    <div className="walkthrough-pointer">
      <span>{number}</span>
      {children}
    </div>
  );
}

function readableDate(value) {
  if (!value) return "Not set";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value + "T00:00:00"));
}

export default function Walkthrough() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("Operations Analyst");
  const [openFrom, setOpenFrom] = useState("");
  const [openUntil, setOpenUntil] = useState("");
  const [objectiveMinutes, setObjectiveMinutes] = useState(15);
  const [voiceMinutes, setVoiceMinutes] = useState(20);
  const [objectiveSource, setObjectiveSource] = useState("Lumo drafts");
  const [voiceSource, setVoiceSource] = useState("Lumo drafts");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [complete, setComplete] = useState(false);

  const totalMinutes = Number(objectiveMinutes) + Number(voiceMinutes);
  const guideContent = [
    {
      eyebrow: "STEP 1 · ROLE",
      title: "Start with the role",
      copy: "Give the interview a clear focus. Add a role name and choose the dates candidates can access it.",
      tip: "The role title and interview window appear in the session summary.",
    },
    {
      eyebrow: "STEP 2 · INTERVIEW",
      title: "Shape both parts",
      copy: "Set a time budget for objective questions and the voice conversation. Choose Lumo's drafts or your own questions for each part.",
      tip: "Keep the same structure for every candidate in this role.",
    },
    {
      eyebrow: "STEP 3 · REVIEW",
      title: "Check the candidate view",
      copy: "Review your setup, try the preview, and make any changes before you finish the walkthrough.",
      tip: "This is a product preview. Your setup is not submitted or saved to a server.",
    },
  ][step];

  return (
    <main className="walkthrough-page">
      <div className="wrap">
        <header className="walkthrough-nav">
          <a className="walkthrough-brand" href="/" aria-label="Lumo home">
            <span className="walkthrough-brand-mark" aria-hidden="true">
              L
            </span>
            <span>Lumo</span>
          </a>
          <span className="walkthrough-tag">INTERACTIVE WALKTHROUGH</span>
          <a className="walkthrough-exit" href="/">
            Exit
          </a>
        </header>

        <section className="walkthrough-intro">
          <p className="eyebrow">A guided setup</p>
          <h1>Build an interview, one step at a time.</h1>
          <p className="lead">
            Follow the on-screen pointers to shape a role, choose your interview
            format, and preview the candidate experience.
          </p>
        </section>

        <ol className="walkthrough-progress" aria-label="Walkthrough progress">
          {steps.map((title, index) => (
            <li
              className={
                index === step ? "current" : index < step ? "done" : ""
              }
              key={title}
            >
              <button
                type="button"
                aria-current={index === step ? "step" : undefined}
                onClick={() => {
                  setStep(index);
                  setComplete(false);
                }}
              >
                <span className="walkthrough-step-number">
                  {index < step ? "✓" : index + 1}
                </span>
                <span>{title}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="walkthrough-layout">
          <section
            className="walkthrough-workspace glass-panel"
            aria-labelledby="workspace-title"
          >
            {complete ? (
              <div className="walkthrough-complete">
                <span className="walkthrough-complete-mark" aria-hidden="true">
                  ✓
                </span>
                <p className="eyebrow">WALKTHROUGH COMPLETE</p>
                <h2 id="workspace-title">You’re ready to build.</h2>
                <p>
                  Your choices were only used in this preview and have not been
                  sent or saved.
                </p>
                <div className="walkthrough-complete-actions">
                  <button
                    className="btn sec"
                    type="button"
                    onClick={() => setComplete(false)}
                  >
                    Review setup
                  </button>
                  <a className="btn" href="/">
                    Back to Lumo
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="walkthrough-workspace-heading">
                  <div>
                    <p className="walkthrough-kicker">
                      STEP {step + 1} OF {steps.length}
                    </p>
                    <h2 id="workspace-title">{steps[step]}</h2>
                  </div>
                  <span className="walkthrough-live">Preview setup</span>
                </div>

                {step === 0 && (
                  <div className="walkthrough-fields">
                    <div className="guided-field">
                      <GuidedPointer number="01">Start here</GuidedPointer>
                      <label className="walkthrough-label" htmlFor="walk-role">
                        Role name
                      </label>
                      <input
                        className="walkthrough-input"
                        id="walk-role"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                        placeholder="e.g. Operations Analyst"
                      />
                      <p className="walkthrough-hint">
                        Use the job title candidates will recognize.
                      </p>
                    </div>

                    <div className="guided-field">
                      <GuidedPointer number="02">
                        Choose an interview window
                      </GuidedPointer>
                      <div className="walkthrough-date-grid">
                        <div>
                          <label
                            className="walkthrough-label"
                            htmlFor="walk-open-from"
                          >
                            Open from
                          </label>
                          <input
                            className="walkthrough-input"
                            id="walk-open-from"
                            type="date"
                            value={openFrom}
                            onChange={(event) =>
                              setOpenFrom(event.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label
                            className="walkthrough-label"
                            htmlFor="walk-open-until"
                          >
                            Open until
                          </label>
                          <input
                            className="walkthrough-input"
                            id="walk-open-until"
                            type="date"
                            min={openFrom || undefined}
                            value={openUntil}
                            onChange={(event) =>
                              setOpenUntil(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <p className="walkthrough-hint">
                        Dates are optional for this preview.
                      </p>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="walkthrough-interview-parts">
                    <article className="walkthrough-part">
                      <div className="walkthrough-part-title">
                        <span className="walkthrough-part-icon">01</span>
                        <div>
                          <h3>Objective questions</h3>
                          <p>Short questions with clear, comparable answers.</p>
                        </div>
                      </div>
                      <div className="guided-field">
                        <GuidedPointer number="03">Set the time</GuidedPointer>
                        <label
                          className="walkthrough-label"
                          htmlFor="walk-objective-time"
                        >
                          Time for this part{" "}
                          <output>{objectiveMinutes} min</output>
                        </label>
                        <input
                          className="walkthrough-range"
                          id="walk-objective-time"
                          type="range"
                          min="5"
                          max="45"
                          step="5"
                          value={objectiveMinutes}
                          onChange={(event) =>
                            setObjectiveMinutes(event.target.value)
                          }
                        />
                      </div>
                      <SourcePicker
                        label="Question source"
                        selected={objectiveSource}
                        onSelect={setObjectiveSource}
                      />
                    </article>

                    <article className="walkthrough-part">
                      <div className="walkthrough-part-title">
                        <span className="walkthrough-part-icon voice">02</span>
                        <div>
                          <h3>Voice conversation</h3>
                          <p>Open questions with space for follow-ups.</p>
                        </div>
                      </div>
                      <div className="guided-field">
                        <GuidedPointer number="04">
                          Choose a time budget
                        </GuidedPointer>
                        <label
                          className="walkthrough-label"
                          htmlFor="walk-voice-time"
                        >
                          Time for this part <output>{voiceMinutes} min</output>
                        </label>
                        <input
                          className="walkthrough-range"
                          id="walk-voice-time"
                          type="range"
                          min="5"
                          max="45"
                          step="5"
                          value={voiceMinutes}
                          onChange={(event) =>
                            setVoiceMinutes(event.target.value)
                          }
                        />
                      </div>
                      <SourcePicker
                        label="Question source"
                        selected={voiceSource}
                        onSelect={setVoiceSource}
                      />
                    </article>
                  </div>
                )}

                {step === 2 && (
                  <div className="walkthrough-review">
                    <GuidedPointer number="05">
                      Your setup updates as you make changes
                    </GuidedPointer>
                    <dl className="walkthrough-summary">
                      <div>
                        <dt>Role</dt>
                        <dd>{role.trim() || "Role not named"}</dd>
                      </div>
                      <div>
                        <dt>Interview window</dt>
                        <dd>
                          {readableDate(openFrom)} – {readableDate(openUntil)}
                        </dd>
                      </div>
                      <div>
                        <dt>Objective questions</dt>
                        <dd>
                          {objectiveMinutes} min · {objectiveSource}
                        </dd>
                      </div>
                      <div>
                        <dt>Voice conversation</dt>
                        <dd>
                          {voiceMinutes} min · {voiceSource}
                        </dd>
                      </div>
                    </dl>
                    <div className="walkthrough-total">
                      <span>Total interview time</span>
                      <strong>{totalMinutes} min</strong>
                    </div>
                    <button
                      className="btn sec walkthrough-preview-button"
                      type="button"
                      aria-expanded={previewOpen}
                      onClick={() => setPreviewOpen(!previewOpen)}
                    >
                      {previewOpen
                        ? "Hide candidate preview"
                        : "Preview candidate flow"}
                    </button>
                    {previewOpen && (
                      <div className="walkthrough-candidate-preview">
                        <span className="walkthrough-live">CANDIDATE VIEW</span>
                        <h3>{role.trim() || "Your interview"}</h3>
                        <p>
                          First, answer a few objective questions. Then, you’ll
                          have a conversation about your experience.
                        </p>
                        <p className="walkthrough-hint">
                          This preview does not record audio or send answers.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </section>

          <aside className="walkthrough-guide glass-panel">
            <span className="walkthrough-guide-orb" aria-hidden="true">
              ✦
            </span>
            <p className="walkthrough-kicker">{guideContent.eyebrow}</p>
            <h2>{complete ? "That’s the setup." : guideContent.title}</h2>
            <p className="walkthrough-guide-copy">
              {complete
                ? "You can return to your setup or head back to the Lumo overview."
                : guideContent.copy}
            </p>
            <div className="walkthrough-tip">
              <span className="walkthrough-tip-dot" aria-hidden="true" />
              <p>
                <strong>{complete ? "Preview only" : "Pointer tip"}</strong>
                <br />
                {complete
                  ? "Your choices are not submitted or saved."
                  : guideContent.tip}
              </p>
            </div>
            {!complete && (
              <div className="walkthrough-guide-actions">
                <button
                  className="btn sec"
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    if (step === steps.length - 1) {
                      setComplete(true);
                    } else {
                      setStep(step + 1);
                      setPreviewOpen(false);
                    }
                  }}
                >
                  {step === steps.length - 1
                    ? "Finish walkthrough"
                    : "Continue"}
                </button>
              </div>
            )}
          </aside>
        </div>

        <p className="walkthrough-disclaimer">
          This is an interactive product preview. No account is needed, and
          nothing you enter is submitted.
        </p>
      </div>
    </main>
  );
}
