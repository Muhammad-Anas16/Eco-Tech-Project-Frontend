import "./App.css";
import SidebarWrapper from "./components/SidebarWrapper";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <SidebarWrapper>
      <DashboardPage />
    </SidebarWrapper>
  );
}

export default App;
