import './App.css'
import { TwitterFollowCrad } from './TwitterFollowCard'

export function App () {

    return (
        <div className='App'> 
            <TwitterFollowCrad 
            userName="pheralb" 
            name="Pablo Hernandez" 
            />

            <TwitterFollowCrad 
            userName="midudev" 
            name="Migel Angel Duran" 
            />

            <TwitterFollowCrad 
            userName="vxnder" 
            name="Venderhart" 
            />
        </div>
    )
}