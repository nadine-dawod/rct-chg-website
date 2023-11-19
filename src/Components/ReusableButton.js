

const ReusableButton = ({children, handleClick}) => {
    return <button className="ReusableBtn" onClick={handleClick}>{children}</button>
  };


  export default ReusableButton;