export function Button() {

    function handleClick() {
        alert("I'm made from scratch")
    }

    return(
        <button onClick={handleClick}>
            Click me
        </button>
    )
}