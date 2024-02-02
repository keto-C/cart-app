import './App.css';
import itemsList from './itemsdata';
import Item from "./items";
import { useEffect, useState } from 'react';
import pic from "./shopping-bag-54.png"

function App() {

    const [items,setItems] = useState([]);
    const [isEmpty,setIsEmpty] = useState(false);
    const [numsInCart, setNumsInCart] = useState(itemsList.length);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        setTimeout(() => {
            setItems([...itemsList]);
            setLoading(false);
          }, 1000);
    }, [])
    

    const getItem = (item) => {
        return <Item key={item.id} 
        id={item.id} 
        image={item.image} 
        name={item.name} 
        price={item.price} 
        removeItem={removeItem}
        num={item.num}
        inc={inc}
        dec={dec}
        />
    }

    const removeItem = (id) => {
        if (items.length == 1) {
            setIsEmpty(true)
            setItems([]);
            setNumsInCart(0);
        } else {
            setItems(items.filter(item => item.id != id));
            setNumsInCart(numsInCart-1)
        }
    }

    const inc = (id) => {
        const newList = items.map((item) => {
            if (item.id === id) {
              const updatedItem = {
                ...item,
                num: item.num+1,
              };
      
              return updatedItem;
            }
      
            return item;
          });
      
          setItems(newList);
          setNumsInCart(numsInCart+1)
    }

    const dec = (id) => {
        if (items.find(item => item.id===id).num===1){
            removeItem(id);
        } else {
        const newList = items.map((item) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    num: item.num-1,
                  };
          
                  return updatedItem;
                
            }
            return item;
            
          });
          setNumsInCart(numsInCart-1)
          setItems(newList);
        }
    }

    const removeAll = () => {
        setIsEmpty(true)
        setItems([]);
        setNumsInCart(0);
    }

    return (
        <div className='container'>
            {loading && <h1 className='loading'><storng>Loading...</storng></h1>}
            {!loading && <div>
            <div className='header'>
                <div className='cartApp'>Cart App</div>
                <div className='cart'>
                <div className='cartIcon'><img src={pic} className='cartImg'></img><div className='circleCartNums'>{numsInCart}</div></div>
                </div>
            </div>
            <h1>YOUR BAG</h1>
            {!isEmpty && <div className='items'>{items.map(item => getItem(item))}</div>}
            {!isEmpty && <div className='goofy'><div className='line'></div></div>}
            {!isEmpty && <div className='totals'>
                <div className='total'>Total</div>
                <div className='totalPrices'>${items.reduce((a,v) => a=a+(v.price*v.num), 0)}</div>
                
            </div>}
            {!isEmpty && <div className='removeButt'><button className='empty' onClick={removeAll}>CLEAR CART</button></div>}
            {isEmpty && <div className='outOfIsEmpty'><div className='isEmpty'>is currently empty</div></div>}
            </div>}
        </div>
    )
}

export default App;