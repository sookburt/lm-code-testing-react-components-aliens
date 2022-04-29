interface Props {
  errorMessage: string;
}
const ValidationError: React.FC<Props> = (props) => {

  return (
    <>
      <p className="text__danger text-items">{props.errorMessage}</p>
    </>
  )
}

export default ValidationError;