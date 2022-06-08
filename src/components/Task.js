import React from "react";
import { Col, Row } from "reactstrap";
import { solution, sumThreeNumber } from "./helper";
import { Link } from "react-router-dom";

export default function Task() {
    const [task1Output, setTask1Output] = React.useState(),
        [task2Output, setTask2Output] = React.useState()

    React.useEffect(() => {
        // Task 1
        const task1 = solution([1, 4, 9])
        console.log('Task 1 Output: ', task1)
        setTask1Output(task1)

        // Task 2
        const sumArray = [12, 3, 1, 2, -6, 5, -8, 6]
        const targetSum = 0
        const task2 = sumThreeNumber(sumArray, targetSum)
        console.log('Task 2 Output: ', task2)
        setTask2Output(task2)
    }, [])

    return (
        <>
            <div className="container">

                <Row className='justify-content-center py-5 px-2 '>
                    <Col lg='12'>
                        <Link to='/' className='text-white'>Go to Task 3</Link>
                    </Col>
                    <Col lg='6' className='form-area rounded bg-white p-5'>
                        <h2>Task 1 </h2>
                        <div> Array given:  [1, 4, 9]</div>
                        <div><b> Output: {task1Output} (Check Console)</b></div>
                        <hr />
                        <h2>Task 2</h2>
                        <div> Array given:   [12, 3, 1, 2, -6, 5, -8, 6]</div>
                        <div> Target Sum: 0 </div>
                        <div><b> Output: {task2Output} (Check Console)</b></div>
                    </Col>
                </Row>

            </div>
        </>
    )
}