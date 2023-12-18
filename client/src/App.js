import { CategoriesPage, Home, LoginPage, SignupPage } from "./pages";
import { Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* <div className=" border-solid border-black border-4">header</div> */}

      <Outlet />

      {/* <div className="border-solid border-black border-4">footer</div> */}

    </>

  );
}

function App() {

  const theme = "dark";
  return (
    <main className={theme}>
      <div className=" flex flex-col w-full min-h-screen">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/category" element={<CategoriesPage />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
