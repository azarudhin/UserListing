import logo from "./logo.svg";
import "./App.css";
import Indexpage from "./component/indexpage";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router, Route, Switch, Routes, BrowserRouter } from "react-router-dom";
import UserList from "./component/UserList";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient();
  const[isList,setIsList]=useState({})
  console.log('isListing page',isList);
  return (
      // <Router>
    <QueryClientProvider client={queryClient} contextSharing={true}>
         <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Indexpage setIsList={setIsList} />}
                    />
                    <Route
                        exact
                        path="/userlist"
                        element={<UserList isList={isList}/>}
                    />
                </Routes>
            </BrowserRouter>
            
            {/*  */}
         
    </QueryClientProvider>
      // </Router>
  );
}

export default App;
