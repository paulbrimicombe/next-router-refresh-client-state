import RefreshingComponent from "../components/RefreshingComponent.jsx";

const Index = () => (
  <>
    <h1>Testing for router.refresh()</h1>
    <ol>
      <li>Refresh the page</li>
      <li>Click the button a few times (note the counter increments)</li>
      <li>
        After 5 seconds, <code>router.refresh()</code> is called and the client
        state is lost
      </li>
      <li>Click the button a few more times</li>
      <li>
        After another 5 seconds, <code>router.refresh()</code> is called again,
        but the client state is retained
      </li>
    </ol>
    <RefreshingComponent />
  </>
);

export default Index;
