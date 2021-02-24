import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/DarioJunior.png" alt="Dario Junior Foto Perfil" />
            <div >
                <strong>Dário Junior</strong>
                <p> 
                    <img src="icons/level.svg" alt="Level"/> 
                    Level 1
                </p>
            </div>
        </div>
    )
}