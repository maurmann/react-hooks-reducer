import BoxA from "./boxA";
import BoxB from "./boxB";
import { useState } from "react";

function App2() {

    const [value, setValue] = useState(0);

    return (
        <div>
            <BoxA value={value} boxASets={v => setValue(v)}></BoxA>
            <br />
            <BoxB value={value} boxBSets={v => setValue(v)}></BoxB>
        </div>
    )
}
export default App2;