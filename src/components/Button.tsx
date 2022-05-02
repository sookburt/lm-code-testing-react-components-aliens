interface Props {
  clickHandler: () => void;
  isDisabled: string;
}
const Button: React.FC<Props> = (props) => {

  return (
    <>
    <section className='form--row'>
      <div className='form--items' ></div>
      <button className='form--items' 
        onClick={(e) => {e.preventDefault(); 
          props.clickHandler()}} 
        {...props.isDisabled}
      >Submit form
      </button>
    </section>
    </>
  )
}

export default Button;