interface Props {
  errorMessage: string;
}
const ValidationError: React.FC<Props> = (props) => {

  return (
    <>
      <p className="text__danger">{props.errorMessage}</p>
    </>
  )
}

export default ValidationError;