
import { Provider } from "react-redux";
import { store } from './store/store'
export function ProviderFunction({children}){
    return <Provider store={store}>{children}</Provider>
}