export default function TabButton({children, isSelected, ...props}){
  //onSelect is a function that will be called when the button is clicked
  
  /*function handleClick() {
    console.log(`You clicked on the ${children} tab!`);
  }*/

  return(
    <li>{/* DO NOT ADD PARENTESIS ON THE FUNCTION BECAUSE YOU DONT
          EXCECUTE IT, REACT DOES */}
      <button className={isSelected ? 'active' : undefined} {...props}>
              {children}
      </button>
      {/* This button will call the onSelect function when clicked.*/}
    </li>
  )
}


