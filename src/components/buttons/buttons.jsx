const Buttons =(props) =>{ 
  const { name, clazz } = props
    return (
      <button  onClick={(e) => {props.changePage(2
      ,e)}} className={clazz}>{name}</button>
    )
  }


export default Buttons;