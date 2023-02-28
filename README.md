# Project-Etch-A-Sketch

-Documentation for the JavaScript code:

The code creates a webpage that displays a grid of squares that can be drawn on by clicking and dragging the mouse. It also includes buttons that allow the user to adjust the size of the grid.

The code begins by defining a function squareCreator() that creates a container div and a number of child divs with the class "square". The container div has the id "container". The child divs have a width and height of 32 pixels and are added to the container div. This function is called when the page loads, creating a 16x16 grid of squares.

The code then defines a draw() function that changes the class of a square to "black" when the mouse is moved over it and the mouse button is held down. This function is called when the "mousemove" event is triggered on the container div.

The code also defines a boolean variable isDrawing that is set to true when the mouse button is pressed down and false when it is released. This variable is used to determine whether the draw() function should be called when the mouse is moved.

The code then defines a squireCreatorButton() function that creates a grid of squares with a variable number of rows and columns, based on the row1 and row2 arguments passed to it. This function is called when one of the grid size buttons is clicked, removing all the child nodes of the container div and creating a new grid with the specified number of rows and columns.

The removeAllChildNodes() function is also defined to remove all the child nodes of a given parent node.

Finally, the code adds event listeners to the container div and the grid size buttons, as well as a clear button that calls the removeAllChildNodes() function to remove all the squares from the container div and recreate the 16x16 grid.
