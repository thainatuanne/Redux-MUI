import { AppRoutes } from "./routes/AppRoutes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { CustomThemeProvider } from "./context/CustomThemeProvider";
import { ThemeToggleButton } from "./components/ThemeToggleButton";

export function App() {
  return (
    <ReduxProvider store={store}>
      <CustomThemeProvider>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "1200px", position: "relative" }}>
            <div style={{ position: "absolute", right: 16, top: 16 }}>
              <ThemeToggleButton />
            </div>
            <AppRoutes />
          </div>
        </div>
      </CustomThemeProvider>
    </ReduxProvider>
  );
}
