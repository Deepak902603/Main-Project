import AccessibilityIntro from "./components/AccessibilityIntro";
import A11yPatterns from "./components/A11yPatterns";
import FixA11yIssues from "./components/FixA11yIssues";
import A11yCommit from "./components/A11yCommit";
import A11yDemo from "./components/A11yDemo";

function App() {
  return (
    <main>
      <h1>Accessibility in React</h1>

      <AccessibilityIntro />
      <A11yPatterns />
      <FixA11yIssues />
      <A11yCommit />
      <A11yDemo />
    </main>
  );
}

export default App;
