export default function TabButton({children, onSelect, isSelected}){
  //onSelect is a function that will be called when the button is clicked
  
  /*function handleClick() {
    console.log(`You clicked on the ${children} tab!`);
  }*/

  return(
    <li>{/* DO NOT ADD PARENTESIS ON THE FUNCTION BECAUSE YOU DONT
          EXCECUTE IT, REACT DOES */}
      <button className={isSelected ? 'active' : undefined} 
              onClick={onSelect}>{children}</button>
      {/* This button will call the onSelect function when clicked.*/}
    </li>
  )
}


