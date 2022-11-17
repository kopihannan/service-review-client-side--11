import { RouterProvider } from "react-router-dom";
import router from "./routes/Router/Router";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
