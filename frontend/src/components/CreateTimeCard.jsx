import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';

function CreateTimeCard() {
  const [html, setHtml] = useState('');

  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-between pt-5 mb-4">
        <h4>Create TimeCard</h4>
        <a href="/" className="btn btn-dark">Back</a>
      </div>
      <div className="card border-0 shadow-lg">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter Email" />
          </div>
          <div className="mb-12">
            <label htmlFor="" className="form-label">Time Card</label>
            <select className="form-control">
              <option>Please Check</option>
              <option>Check In</option>
              <option>Check Out</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Date of Time</label>
            <input type="datetime-local" className="form-control" placeholder="" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Note</label>
            <Editor value={html} containerProps={{ style: { height: '400px' } }} onChange={onChange} />
          </div>
          <button className="btn btn-dark">Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTimeCard