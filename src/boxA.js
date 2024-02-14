function BoxA(props) {

    function increment() {
        let v = props.value;
        v = v + 1;

        props.boxASets(v);

    }




    return (
        <p>
            <b>Box A:</b>&nbsp;<span>{props.value}</span>
            <button onClick={increment}>Increment</button>
        </p>
    )

}

export default BoxA;