const mainContainer = document.querySelector('#root')

const reactelement ={
    type : "a",
    props : {
        href : "http://www.google.com",
        target : "_self"    },
    children : "your google here"
}


create(reactelement, mainContainer);
function create(reactelement, container ){

    let DomElement = document.createElement(reactelement.type);
    // let set_prop = DomElement.setAttribute("href", reactelement.props.href);
    // let set_target = DomElement.setAttribute("target", reactelement.props.target)
    
    //"or"

    for (const key in  reactelement.props) {
        
        DomElement.setAttribute(key , reactelement.props[key])  
        
        
    }

    DomElement.innerHTML = reactelement.children;
    container.appendChild(DomElement);

}


