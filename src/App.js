import { RouterProvider } from "react-router-dom";
import router from "./routes/Router/Router";
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
