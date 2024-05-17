import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  body:[],
  id:[],
  count:1,
  total:0
};

export const ecomSlice = createSlice({
  name: 'ecom',
  initialState,
  reducers: {

    setBody: (state, action) => {
      state.body = [...state.body,action.payload];
      state.id=[...state.id,action.payload.id];
      const newTotal=state.total+action.payload.price;
      state.total = parseFloat(newTotal.toFixed(2));
    },
    increaseCount:(state,action)=>{
      state.body=state.body.map(item =>
        item.id === action.payload.id
          ? { ...item, count: item.count + 1 }
          : item
        )
        const newTotal = state.total + action.payload.price;
        state.total = parseFloat(newTotal.toFixed(2));
    },
    decreaseCount:(state,action)=>{

      const product = state.body.find(item => item.id === action.payload.id && item.count > 1);
      
      if(product){
          state.body = state.body.map(item =>
            item.id === action.payload.id
                ? { ...item, count: item.count - 1 }
                : item
            );
            const newTotal = state.total - action.payload.price;
            state.total = parseFloat(newTotal.toFixed(2));
      }else{
          state.body = state.body.filter(item => item.id !== action.payload.id);
          state.id = state.id.filter((item) => item !== action.payload.id)
          

      }
    },
    removeItem:(state,action)=>{
     
      const removedItem = state.body.find(item => item.id === action.payload.id);
      console.log(action.payload.id);
      console.log(typeof(action.payload.id));
      console.log(removeItem);
      if (removedItem) {
        // Calculate the price of the removed items
        const removedItemTotalPrice = removedItem.count * removedItem.price;
        console.log( removedItem.count, removedItem.price)
        // Subtract the price of the removed items from the total
        state.total = parseFloat((state.total - removedItemTotalPrice).toFixed(2));
      
      }
      state.body=state.body.filter(item=> item.id!==action.payload.id);
      state.id = state.id.filter((item) => item !== action.payload.id)
    }
   
  }
});

export const { setBody,increaseCount,decreaseCount,removeItem } = ecomSlice.actions;

export default ecomSlice.reducer;
