import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Create = () => {
  const [add, setAdd] = useState("");
  const [viewData, setViewData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIdx, seteditIdx] = useState();

  const handleAdd = () => {
    if (add.length !== 0) {
      setViewData((viewData) => [...viewData, add]);
      setAdd("");
    }
  };

  const submit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  const deleteData = (idx) => {
   viewData.splice(idx, 1);
      setViewData([...viewData]);
  };

  const editData = (idx) => {
    setAdd(viewData[idx]);
    setShow(true);
    seteditIdx(idx);
  };

  const updateData = () => {
viewData.splice(editIdx,1,add)
     setViewData([...viewData]);
     setShow(false);
     setAdd("");
  };
     
  return (
    <div>
      <h1>Crud operation</h1>
      <h2>Here you can Add the data,Delete the data,and Update the data</h2>
      <form onSubmit={submit}>
        <input className="btn"
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />{" "}
        {!show ? (
          <Button  type="submit" className="btn btn-primary" onClick={handleAdd}>
            {" "}
            Add
          </Button>
        ) : (
          <Button type="button" className="btn btn-primary" onClick={updateData}>
            Update
          </Button>
        )}
      </form>
      {viewData.map((e, idx) => {
        return (
          <div key={idx}>
            <p>{e}</p>
            <Button  className="btn btn-primary" type="button" onClick={() => editData(idx)}>
              Edit
            </Button>{" "}
            <Button className="btn btn-primary" type="button" onClick={() => deleteData(idx)}>
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Create;
