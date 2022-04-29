interface Props {
  clickHandler: () => boolean;
}
const Button: React.FC<Props> = (props) => {

  return (
    <>
      <button onSubmit={(e) => {e.preventDefault(); props.clickHandler()}}>Submit form</button>
    </>
  )
}

export default Button;