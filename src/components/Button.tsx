import { useEffect, useState } from "react";

interface Props {
  clickHandler: () => void;
  isDisabled: boolean;
}
const Button: React.FC<Props> = ({clickHandler, isDisabled}) => {

  const [buttonDisabled, setButtondisabled] = useState<boolean>(isDisabled);

  useEffect(() => {

    setButtondisabled(isDisabled);

  },[isDisabled]);

  return (
    <>
    <section className='form--row'>
      <div className='form--items' ></div>
      <button className='form--items' 
        disabled={!buttonDisabled} 
        onClick={(e) => {e.preventDefault(); 
          clickHandler()}} 
      >Submit form
      </button> 
    </section>
    </>
  )
}

export default Button;