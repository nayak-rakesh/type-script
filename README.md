# Basic Node-TypeScript setup

* Run command `npm init --yes` to initialize a project.
* Run command `npm i typescript -D` to install typescript compiler as dev dependency.
* we can also do `tsc init` to initialize as a typescript project.
* The `tsconfig.json` file tells typescript compiler, how to compile the typescript code to javascript code.

## Installing @types package
* It's required to install @types definition files in dev dependency to use with typescript compiler as many packages 
are written in javascript.
* Run `npm i @types/node -D` to install type definition of node packages. 