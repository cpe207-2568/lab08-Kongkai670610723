import {Header} from "./components/Header.tsx"
import {Sidebar} from "./components/Sidebar.tsx"
import {TaskInput} from "./components/TaskInput.tsx"
import {Task} from "./components/Task.tsx"
import {Footer} from "./components/Footer.tsx"
import type { TaskProps } from "./libs/types.tsx"


function App() {

  const TaskCards: TaskProps [] = [
    { id: 1, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false },
    { id: 2, title: "Write code", description: "Finish project for class", isDone: false },
    { id: 3, title: "Deploy app", description: "Push project to GitHub Pages", isDone: false }
  ];
  


  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      {/*<header className="text-white bg-primary p-2 w-100">
        <h4>Note App</h4>
      </header>*/}

      <Header/>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        {/*<aside
          className="d-flex flex-column p-3"
          style={{
            width: "200px",
            backgroundColor: "#f2f2f2",
            justifyContent: "space-between",
          }}
        >
          { เมนูด้านบน }
          <nav className="nav flex-column gap-2">
            <h5>เมนู</h5>
            <a className="nav-link active" href="#">
              หน้าแรก
            </a>
            <a className="nav-link" href="#">
              รายการ
            </a>
            <a className="nav-link" href="#">
              เกี่ยวกับ
            </a>
          </nav>

          { แสดงชื่อผู้ใช้ด้านล่าง }
          <div className="fw-bold text-muted">
            <p>chanadda : admin</p>
          </div>
        </aside>*/}

        <Sidebar userName="Phurin" type="admin"/>        



        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            {/*<div className="m-2 p-2">
              <form className="row">
                <div className="col-10">
                  <h2>Phurin Inthajak</h2>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Insert a task here.."
                  ></input>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>*/}




            <TaskInput/>

          


            {/* Card รายการ */}
            {/*<div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">Read a book</h5>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text"> Vite + React + Bootstrap + TS </p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">Write code</h5>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text">Finish project for class</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">Deploy app</h5>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text">Push project to GitHub Pages</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>*/}


          <Task {...TaskCards[0]}/>
          <Task {...TaskCards[1]}/>
          <Task {...TaskCards[2]}/>


          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      {/*<footer className="text-secondary text-center p-2 bg-light mt-auto">
        Copyright © 2026 chanadda thanyaratthanon 67062039
      </footer>*/}


      <Footer year={"2026"} fullName={"Phurin Inthajak"} studentId={"670610723"}/>



      
    </div>
  );
}

export default App;
