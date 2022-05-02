import { CarRepairTwoTone } from '@mui/icons-material'
import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom';




export default function Icon () {

    const { cart } = useContext(CartContext);

   return (
        <>
            <div className="icon">

                <Link to='/cart'><AiOutlineShoppingCart  size={50} /></Link>({cart.reduce ((acc, item) => acc + item.count, 0) })
            </div>
        </>
    )
};