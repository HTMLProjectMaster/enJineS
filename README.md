# enJineS
A basic engine that could be use for all kind of js canvas projects.


The project contains:

 - The index.html file that must be loaded (root of the project)
 - The module folder that contains all the modules (the actual engine)
 - The scenic.js file in which you could call your functions (see 'system.load' method)
 
 
Usage:

 - In order to use this engine, you need to create (or copy) the scenic.js file (it's position doesn't matter).
 - Then, use the 'system.load' method:   system.load('TYPE', 'NAME', '../FILE.js', system.dom.head)
 - The project (even once your assets are declared in the scenic.js) must be started with the index.js root file located in the engine's folder.
 - This file COULD NOT be moved.
 - The engine's folder could be renamed or located wherever you want.
