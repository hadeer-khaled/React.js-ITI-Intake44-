import ProgressBar from "react-bootstrap/ProgressBar";

function MyProgressBar(props) {
  // return (
  //   <div className="d-flex flex-row">
  //     <div>{props.skillName} </div>
  //     <ProgressBar now={props.progress} />;
  //   </div>
  // );
  return (
    <>
      <p>{props.skillName}</p>
      <ProgressBar now={props.progress} />
    </>
  );
}

export default MyProgressBar;
