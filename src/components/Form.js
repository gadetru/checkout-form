import React, { useEffect, useState } from 'react'
import './form.scss'
import sobre from '../img/sobre.png'
import telefono from '../img/telefono.png'
import user from '../img/humano.png'
import home from '../img/hogar.png'
import city from '../img/edificios.png'
import world from '../img/tierra.png'
import buzon from '../img/buzon-de-correo.png'
import mochila from '../img/photo1.png'
import zapatos from '../img/photo2.png'

export const Form = () => {

    const [precio1, setPrecio1] = useState(0)
    const [precio2, setPrecio2] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [total, setTotal] = useState(0)
  


    const handleSumarPrecio1 = ()=>{
        setPrecio1(precio1 + 1);

    }
       

    const handleRestarPrecio1 = ()=>{
        if (precio1 > 0){
           setPrecio1(precio1 - 1); 
        }
        
    }
    const handleSumarPrecio2 = ()=>{
        setPrecio2(precio2 + 1);
      
    }
       

    const handleRestarPrecio2 = ()=>{
        if (precio2 > 0){
           setPrecio2(precio2 - 1); 
           
        }
        
    }

    useEffect(() => {
    
        if(precio1 > 0 || precio2 > 0){

            setShipping ( 19);
            console.log('los precios' ,precio1,precio2);
        }
        else{
            setShipping(0);
            console.log('los precios' ,precio1,precio2);
        }
        
    }, [total])



    useEffect(() => {

        setTotal((54.99*precio1)+(74.99*precio2)+shipping) 

    }, [precio1,precio2,shipping])



    
    
       

  return (
    <>
        <header>
            <h1 className='titulo'>Checkout</h1>
        </header>
        <main>
            

            <form  className='formulario1' method="post">

                    <h2 className='form-info'>contact information</h2>

                    <label for="email">E-mail</label>
                    <div className='contenedor-input'>
                        <img className='icons' alt='sobre' src={sobre}/>
                        <input  type="email" id="email" name="email" placeholder='  enter your email...'required/>                        
                    </div> 
                    <br/>
                    <label for="telefono">Phone</label>
                    <div className='contenedor-input'>
                        <img className='icons' alt='telefono' src={telefono}/>
                        <input type="number" id="telefono" name="telefono" placeholder='Enter your phone...'required/>                       
                    </div>                        
                    <br/>

                    <h2 className='form-info'>Shipping address</h2>

                    <label for="name">Full name</label>
                    <div className='contenedor-input'>
                        <img className='icons' alt='user' src={user}/>
                        <input  type="text" id="fullname" name="name" placeholder=' Rodney Cotton'required/>                        
                    </div> 
                    <br/>
                    <label for="adress">Adress</label>
                    <div className='contenedor-input'>
                        <img className='icons' alt='house' src={home}/>
                        <input type="text" id="adress" name="adress" placeholder='Your adress..'required/>                       
                    </div>                        
                    <br/>
                    <label for="city">City</label>
                    <div className='contenedor-input'>
                        <img className='icons' alt='city' src={city}/>
                        <input type="text" id="adress" name="adress" placeholder='Your city..'required/>                       
                    </div>                        
                    <br/>
                    <div className='form-country-pc'>
                        

                        <div className='contenedor-input'>
                            <label className='pais' for="country">Country</label>
                            
                            <img className='icons' alt='mundo' src={world}/>
                            <select id="pais" name="pais" required>
                                <option placeholder="selecciona">Select a country.</option>
                                <option value="usa">Estados Unidos</option>
                                <option value="canada">Canadá</option>
                                <option value="mexico">México</option>
                                <option value="mexico">España</option>
                        
                            </select>                       
                        </div>                        
                        
                        <div className='contenedor-input'>
                            <label for="postal-code">Postal code</label>
                        
                            <img className='icons' alt='buzon' src={buzon}/>
                            <input type="number" id="adress" name="adress" placeholder='11380'required/>                       
                        </div>                        
                        
                    </div>
                    <div  className='flex-start'>   
                        <input type="checkbox" id="guardar-datos" name="datos" value="user-info"/>

                        <label for="miCheckbox">Save this information for next time</label>
                    </div>


                    <div  className='flex-end'>
                        <input type="submit" value='continue'/>                     
                    </div>

            </form>

            <div className='products'>
                <div className='items'>
                    <img src={mochila}/>
                    <div>
                        <h4>Vintage Backbag</h4>
                        <div className='precios'>
                            <p className='precio-actual' >$54,99</p>
                            <p className='precio-original' >$94,99</p>
                        </div>
                        <div className='selector-producto'>
                            <button id="sumar" onClick={handleSumarPrecio1}>+</button>
                            <p>{precio1}</p>
                            <button id="restar" onClick={handleRestarPrecio1}>-</button>
                        </div>
                    </div>
                </div>
                <div className='items'>
                    <img src={zapatos}/>
                    <div>
                        <h4>Levi Shoes</h4>
                        <div className='precios'>
                            <p className='precio-actual'>$74.99</p>
                            <p className='precio-original' >$124,99</p>
                        </div>
                        <div className='selector-producto'>
                            <button id="sumar" onClick={handleSumarPrecio2}>+</button>
                            <p>{precio2}</p>
                            <button id="restar" onClick={handleRestarPrecio2}>-</button>
                        </div>

                    </div>
                </div>

                <div>
                    <p className='border-top'>Shipping: <span id="total">${shipping}</span></p>
                    <p className='border-top'>Total: <span id="total">${total.toFixed(2)}</span></p>
                </div>
            </div>              
                        
        </main>
        <footer>
            <p>Creado por mí mismo, un servidor.</p>
        </footer>
    </>
  )
}
