
import './App.css'
import AuthProvider from './context/AuthProvider';
import Layout from './Layout';
// import ControlledDemo from './components/ControlledDemo'
// import SignUP from './components/SignUP'
// import UncontrolledDemo from './components/UncontrolledDemo'


function App() {

  return (
    <div>
      {/* <UncontrolledDemo /> */}
      {/* <ControlledDemo/> */}
      {/* <SignUP/> */}
      <AuthProvider>
        <Layout />
      </AuthProvider>

    </div>
  )
}

export default App
