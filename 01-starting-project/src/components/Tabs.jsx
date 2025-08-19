export default function Tabs({children, buttons, buttonsContainer}){
  
  //We want to use the value thats received on the buttonsContainer prop
  //as the identifier of the component.

  //We create a variable which can be used as a custom component
  const ButtonsContainer = buttonsContainer;
  
  return(
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  )
}