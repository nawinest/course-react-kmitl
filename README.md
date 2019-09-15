This project was created in course of react.js in KMITL ( my college )

## Content 
- Lecture
Start project with eslint
-     Yarn init
-     yarn add --dev eslint-config-nss
-     Create .eslintrc and add config
    		{
      			"extends": "nss/node"
   		 }
-     Enable eslint.autoFixOnSave in VSCode setting


Let start with basic es6
- Let , const
- String template    => `string text ${expression} string text`
- Arrow Funtion => () => {}
    - Impure function : มีการแก้ไขตัวแปร
    - Pure function : ไม่มีการแก้ไขตัวแปร
- Object ( key, values )
- Array
    - .every => ตรงเงื่อนไข return true / ตรงกันข้าม .some
    - .map , .filter

Let start with React.js ( only new knowledge )
- Props when we want to pass int and bool and function > { <insert here> } 
- Props type > define prop type , specific type , require or not , defaultProps ( $yarn add prop-types; )
- UseState, 
  -  UseEffect => use when updating value (componentdidmount / didupdate)
     1st argument is callback when value has update
     2nd argument for specific values
     if [] in 2nd argument it mean it will do only one time.
     return statement , it means componentdidUnmount
￼
