import './App.css'
import { TwitterFollowCrad } from './TwitterFollowCard'

const user = [
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false

    },
    {
        userName: 'midudev',
        name: 'Migel Angel Duran',
        isFollowing: true

    },
    {
        userName: 'vxnder',
        name: 'Venderhart',
        isFollowing: false

    }
]

export function App() {

    return (
        <div className='App'>
            { /* Aquí va el contenido dinámico */
                user.map(({ userName, name, isFollowing }) => ( /* Itera sobre un array llamado user usando el método .map */
                    <TwitterFollowCrad /* Por cada elemento en el array, crea un componente llamado TwitterFollowCard */
                        key={userName} /* Una clave única para identificar el componente */
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        name={name}
                    />

                ))
            }
        </div>
    )
}