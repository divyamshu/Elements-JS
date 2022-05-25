            function create_element(element_name, attributes, parent_variable, innertext) {
                let var_element = document.createElement(element_name);
                if (attributes != null) {
                    for (let i = 0; i < Object.keys(attributes).length; i++) {
                        let var_element_attribute = document.createAttribute(Object.keys(attributes)[i]);
                        var_element_attribute.value = Object.values(attributes)[i];
                        var_element.setAttributeNode(var_element_attribute);
                    } 
                }
                if (innertext != null){
                    var_element.innerText = innertext
                }
                else {
                    // Do Nothing 
                }
                if (parent_variable != null) {
                    parent_variable.appendChild(var_element);
                }
                else {
                    return var_element
                }
            }
