import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import Comp from "app2/comp";
import loadVue from "vueRemote/loadVue";

import "./index.scss";

const App = () => {
  const theRef = useRef(null);

  useEffect(() => {
    loadVue(theRef.current);
  }, []);

  return (
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: host</div>
        <div ref={theRef}></div>
        <Comp />
      </div>
  );
}
ReactDOM.render(<App />, document.getElementById("host"));
