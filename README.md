  function cellClicked(index) {
    // Implement logic for handling cell clicks and updating the 'field' array
    // For example, toggle between 'X' and 'O' on each click
  
    if (field[index] === null) {
      field[index] = 'X'; 
      render();
    }
  }
  
