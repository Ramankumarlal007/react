//custom react  type can be div, a, p

function customrender(reactElement, container) {
    // const domElement = document.createElement(reactElememt.type);
    // domElement.innerHTML = reactElememt.children;
    // domElement.setAttribute('href', reactElememt.props.href);
    // domElement.setAttribute('target', reactElememt.props.target);
    // container.appendChild(domElement)

  // loop base code
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === "children") continue; {
            domElement.setAttribute(prop, reactElement.props[prop])
        }
        }
        container.appendChild(domElement);
    }

const reactElement = {
    type : 'a',
    props: {
        href: "https://www.yahoo.com",
        target: '_blank'
    },
    children: 'click here'
}

const mainCointainer = document.querySelector('#root')

//react creates a root and a reference is passed from html.

/*i *want a method that should render the reactElememt*/

customrender(reactElement, mainCointainer)
// customrender(what to inject, where to inject)

