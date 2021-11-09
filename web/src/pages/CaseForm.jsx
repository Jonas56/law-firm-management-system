import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { addCase } from "../redux/actions/cases";

const CaseForm = (props) => {
  const history = useHistory();
  let caseModel = {
    title: "",
    description: "",
    court: "",
  };

  const [state, setState] = useState({
    title: caseModel.title,
    description: caseModel.description,
    court: caseModel.court,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, court, description } = state;
    console.log(props);
    if (title.length === 0 || court.length === 0 || description.length == 0) {
      alert("Required files are empty");
    } else {
      props.dispatch(addCase(state));
      history.push("/cases");
    }
  };

  const onTitleChange = (e) => {
    const title = e.target.value;
    setState(() => ({
      title: title,
      description: state.description,
      court: state.court,
    }));
  };
  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setState(() => ({
      title: state.title,
      description: description,
      court: state.court,
    }));
  };

  const onCourtChange = (e) => {
    const court = e.target.value;
    setState(() => ({
      title: state.title,
      description: state.description,
      court: court,
    }));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Item>
          {" "}
          <label>Title</label>
          <input type="text" onChange={onTitleChange} value={state.title} />
        </Item>
        <Item>
          <label>Description</label>
          <input
            type="text"
            onChange={onDescriptionChange}
            value={state.description}
          />
        </Item>
        <Item>
          <label>Court</label>
          <input type="text" onChange={onCourtChange} value={state.court} />
        </Item>

        <input type="submit" value="Add" />
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cases } = state;
  return { cases };
};

export default connect(mapStateToProps)(CaseForm);

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  input {
    color: black;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 60%;
  * {
    width: 70%;
  }
  input {
    color: black;
  }
`;
