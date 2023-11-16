/* 
A reusable Button that should be used 
on all different pages. Remember a reusable 
component is a component you can reuse in 
you application. Depending on how you
 create it you might be able to change
  display text and so on.
  */


const ReusableButton = ({children, handleClick}) => {
    return <button className="ReusableBtn" onClick={handleClick}>{children}</button>
  };


  export default ReusableButton;