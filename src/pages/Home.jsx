import { useState } from "react";
import Search from "../components/atoms/Search";
import Main from "../components/organisms/Main";


function Home() {
  const [state, setState] = useState({location:"", term:""});
  const onSearch = (data) => {
    setState(prevState=>({
      ...prevState,
      ...data
    }));
  };

  return (
    <div>
      <Search onSubmitHandler={onSearch} />
      <Main {...state}/>
    </div>
  );
}

export default Home;
