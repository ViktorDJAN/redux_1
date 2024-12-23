
import './App.css'
import {Provider} from "react-redux";
import {FilterProvider} from "./example/5_1_FilterContext.jsx";
import TodoList from "./example/5_TodoList.jsx";
import {InputField} from "./example/4_InputField.jsx";
import {TodoFilter} from "./example/5_2_TodoFilter.jsx";
import store from "./example/2_store.jsx";

function App() {

    return (
        <Provider store={store}>
            <FilterProvider>
                <TodoList/>
                <InputField/>
                <TodoFilter/>

            </FilterProvider>
        </Provider>

    )
}

export default App
