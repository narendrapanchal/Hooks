import { useMemo, useState } from 'react';
import './App.css';
import HookUseState from './HookUseState';
import HookUseMemo from './HookUseMemo';
import HookUseCallback from './HookUseCallback';
import HookUseRef from './HookUseRef';
import Context from './Context';
import HookUseContext from './HookUseContext';
import HookUseReducer from './HookUseReducer';
import HookUseImperativeHandle from './HookUseImperativeHandle';
import HookUseLayout from './HookUseLayout';
function App() {

  return (
    <Context>

    <div className="App">
     {/* <HookUseState/> */}
     {/* <HookUseMemo/> */}
     {/* <HookUseCallback/> */}
     {/* <HookUseRef/> */}
     {/* <HookUseContext/> */}
     {/* <HookUseReducer/> */}
     {/* <HookUseImperativeHandle/> */}
     <HookUseLayout/>
    </div>
    </Context>
  );
}

export default App;
