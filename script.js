let field = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
]
  function init(){
    render();
  }
  function render() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const table = document.createElement('table');
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td');
        const index = i * 3 + j;
  
        if (field[index] === 'X') {
          cell.classList.add('cross');
        } else if (field[index] === 'O') {
          cell.classList.add('circle');
        }
  
        cell.addEventListener('click', () => cellClicked(index));
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    content.appendChild(table);
  }
  
  function cellClicked(index) {
    // Implement logic for handling cell clicks and updating the 'field' array
    // For example, toggle between 'X' and 'O' on each click
  
    if (field[index] === null) {
      field[index] = 'X'; 
      render();
    }
  }
  
  
