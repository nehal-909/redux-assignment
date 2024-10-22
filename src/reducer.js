import { createSlice } from "@reduxjs/toolkit";
import { emp } from "./employees";

const empReducer = createSlice({
    name:"employees",
    initialState:emp,
    reducers:{
        nehal:(state,action)=>{
            //console.log(action.payload);
            state.push(action.payload);
        },
        editemp:(state,action)=>{
            const {id,name} = action.payload;
            //console.log(id,name);
            
            const emp = state.find((emp)=>{
                return emp.id==id;
            });
            if(emp){
               emp.name=name;
            }
        },
        deleteEmp:(state,action)=>{
            const {id} = action.payload;
            const empMilGya = state.find((emp)=>{return emp.id==id})
            if(empMilGya){
                return state.filter((emp)=>{return emp.id!=id})
            }
        }
    },
});
export default empReducer.reducer;
export const {nehal, editemp, deleteEmp} = empReducer.actions;