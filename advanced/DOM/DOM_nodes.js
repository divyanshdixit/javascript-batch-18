// DOM nodes and Navigation.

// using dom relations we can navigate to any nodes

// parent, child and sibilng. => 3 relations.

In a node tree, the top node is called the root (or root node)
Every node has exactly one parent, except the root
Siblings are nodes with the same parent

// Navigating Between Nodes:

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling

// innerHTML property is same as accessing the nodeValue of the particular element.

document.getElementById("p2").innerHTML = document.getElementById("p1").firstChild.nodeValue;