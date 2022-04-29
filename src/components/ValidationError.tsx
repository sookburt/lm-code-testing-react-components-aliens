import { ValidationInterface } from "../interfaces/ValidationInterface";

const ValidationError: React.FC<ValidationInterface> = (props) => {

  return (
    <>
      <p className="text__danger text-items">{props.errorMessage}</p>
    </>
  )
}

export default ValidationError;