/**
 * Created by Joker on 18/1/7.
 */

import React from 'react'


export default class Welcome extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {num} = {...this.props}
        return (
            <div>
                <ul>
                    <li>num={num}</li>
                </ul>
            </div>
        )
    }
}