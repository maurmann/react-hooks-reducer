function BoxB(props) {

    function decrement() {
        let v = props.value;
        v = v - 1;

        props.boxBSets(v);
    }



    return (
        <p>
            <b>Box B:</b>&nbsp;<span>{props.value}</span>-<span>{Date.now()}</span>
            <button onClick={decrement}>Decrement</button>
        </p>
    )

}

export default BoxB;