//"./components/TaskInput.tsx"


export function TaskInput() {
  return (
        <div className="m-2 p-2">
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
                  <br/> <br />
                  <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
  );
}