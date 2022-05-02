import { ValidationInterface } from "../interfaces/ValidationInterface";

const ValidationError: React.FC<ValidationInterface> = (props) => {

  return (
    <>
      <div></div>
      <div className="form--items">
        <p><span className="text__danger">{props.errorMessage}</span></p>
      </div>
      {/* TODO: find out why resizes element when error exists... empty div v existing div? */}
    </>
  )
}

export default ValidationError;