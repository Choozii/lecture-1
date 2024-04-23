import React, {lazy, Suspense} from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

function App() {

  const ListPage = lazy(()=>import('./pages/ListPage/index'));
  const ViewPage = lazy(()=>import('./pages/ViewPage/index'));

  return (
    <div className="App">
      <Suspense fallback={<></>}>
      <Switch>
        <Route path="/" component={ListPage} exact />
        <Route path="/view/:id" component={ViewPage} exact />
      </Switch>
      </Suspense>
    </div>
  )
}

export default App
