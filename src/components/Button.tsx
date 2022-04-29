interface Props {
  clickHandler: () => boolean;
}
const Button: React.FC<Props> = (props) => {

  return (
    <>
    <section className='form--row'>
      <div className='form--items' ></div>
      <button className='form--items' onClick={(e) => {e.preventDefault(); props.clickHandler()}}>Submit form</button>
    </section>
    </>
  )
}

export default Button;