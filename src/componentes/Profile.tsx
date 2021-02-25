import styles from '../styles/componentes/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/felipeqq.png" alt="Felipe Queiroz"/>
      <div>
        <strong>Felipe Queiroz</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}  