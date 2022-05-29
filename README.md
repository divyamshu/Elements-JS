# Create Elements JS 

Create Element JS helps in removing redundancy & complication while creating synamic elements using Vanilla JS.

`Import` →  `Declare`  →   `Call`

# Compatibility 

<img src="https://elementsjs.blob.core.windows.net/images/all-icon.png" alt="ElementsJS">


Enable into your project by importing - 
```sh
https://elementsjs.blob.core.windows.net/public/create-elements.js
```


##  How to Import ?

Declare on your web-page within `<body>` or `<head>`

```sh
<script src="https://elementsjs.blob.core.windows.net/public/create-elements.js"></script>

```

## How to Declare It ?

***We need to Declare the following -***
- Element to be created
- Attributes for the element
- Parent Element Variable
- Innertext for the element if any


create_element(`Element Name` ; `Attributes` ; `Parent Element` ;  `Innertext`);

| Function Argument | Data Type | Required |
|-------------------|-----------|----------|
| Element Name      | string    | YES      |
| Attributes        | dictionary| Optional |
| Parent Element    | string    | Optional |
| Innertext         | string    | Optional |



## How to Call It ?

> Example To Create a Heading
 ```sh
  <h2> Bootstrap heading</h2>
```
We have to declare it as below - 
 ```sh
var h2 = create_element('h2', null, null, ' Bootstrap heading');
```


> Example To Create Dynamically the input text field like below -
 ```sh
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
```
We have to declare it as below - 
 ```sh
var input_text = create_element('input', {'type':'email';'class':'form-control';'id':'exampleFormControlInput1';'placeholder':'name@example.com'}, null, null);
```
------------------------------------------------------------------OR---------------------------------------------------------------------------------------
 ```sh
var input_text_attributes = {'type':'email';'class':'form-control';'id':'exampleFormControlInput1';'placeholder':'name@example.com'}
var input_text = create_element('input', input_text_attributes, null, null);
```


> Example To Create Dynamically Create a Nested Elements -
  ```sh
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```
We have to declare it as below - 
 ```sh
var div_mb_3 = create_element('div',{'class':'mb-3'}, null, null);
  var label = create_element('label',{'for': 'exampleFormControlTextarea1'; 'class' : 'form-label'}; div_mb_3; 'Example textarea')
  var textarea1 = create_element('textarea';{'class':'form-control';'id':'exampleFormControlTextarea1'}; div_mb_3; null)
  
  document.getElementById('root').appendChild(div_mb_3);  //Append Parent Element Only
````





## License
Licensed by [MIT](https://raw.githubusercontent.com/divyamshu/Create-JS/main/LICENSE)

Developed by [Divyamshu Gupta](https://github.com/divyamshu)


<img src="https://elementsjs.blob.core.windows.net/images/element-JS.png" alt="ElementsJS">
