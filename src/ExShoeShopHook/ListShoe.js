import React, { useState } from 'react'
import { connect } from 'react-redux'

function ListShoe(props) {
    let [shoe, setShoe] = useState(props.shoe)

    
    let HadnleRenderShoe = (shoeArr) => {
        return shoeArr.map(item => {
            let { name, image, price } = item
            return <div className="card col-4 " style={{ width: '18rem' }}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#"
                        onClick={() => {
                            // { this.props.HandleAddToCart(item) }
                        }} className="btn btn-success">THÊM VÀO GIỎ</a>
                </div>
            </div>
        })
    }
    return (
        <div>
            <h1>List Shoe</h1>
            <div className='row'>
                {HadnleRenderShoe(shoe)}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        shoe: state.shoeReducer.shoe
    }
}

export default connect(mapStateToProps)(ListShoe)