import { useState } from "react" 
// useState es un hook de React que permite manejar el estado dentro de un componente funcional.
// En este caso, lo usamos para definir si el usuario está o no siguiendo al perfil mostrado.

export function TwitterFollowCrad ({ userName, name }) {

    const [isFollowing, setIsFollowing] = useState(false)
    // Aquí usamos useState para declarar un estado llamado isFollowing.
    // El valor inicial es false (el usuario no está siguiendo al principio).
    // setIsFollowing es una función que nos permite cambiar el valor de isFollowing.


    const text = isFollowing ? 'Siguiendo' : 'Seguir' // Condicionales

    const buttonClassName = isFollowing // Condicionales
    ? 'md-followCard-button is-following'
    : 'md-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    } // Esta función cambia el estado de isFollowing al valor contrario:
      // Si es true, lo cambia a false.
      // Si es false, lo cambia a true.
    
    const imgSrc = `https://unavatar.io/${userName}`

    return (
        <article className='md-followCard'>
            <header className='md-followCard-header'>
                <img className='md-followCard-avatar' src={imgSrc} alt="Midudev" />
                <div className='md-followCard-info'>
                    <strong>{name}</strong>
                    <span className='md-followCard-infoUserName'>@{userName}</span>
                </div >
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="md-followCard-text">{text}</span>
                    <span className="md-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}   