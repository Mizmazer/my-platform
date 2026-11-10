import './App.css'

type ReportKind = "bug" | "feature"

type Report = {
  id: string
  text: string
  kind: ReportKind
}


function App() {
  const sampleReport: Report = {
    id: "1",
  text: "Navigation link is broken",
  kind: "bug",
}

  return (
    <main className="landing-page">
      <section className="intro">
        <div className="avatar">JB</div>

        <p className="eyebrow">COMPUTER SCIENCE</p>

        <h1>Joshua Burick</h1>

        <p className="description">
          I'm a Computer Science student with an
          interest in technology.
        </p>
      </section>
      
<section className="report-board">
  <h2>Bugs & Feature Requests</h2>
  <p>{sampleReport.text} ({sampleReport.kind})</p>
</section>

    </main>
  )
}

export default App
