import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Intro = (props) => {
    const skip = () => {
        localStorage.setItem('firstLoad', 'false')
    }

    console.log(props)

    return(
        <div className={styles.intro}>
            <div className={styles.introBlank}>
                <Image src='/intro.svg' alt='twitter logo' width={500} height={500} />
                <p className={styles.introText}>Здесь будет интро</p>
            </div>

            <button className={styles.skipButton} onClick={() => {
                props.checkLoad()
                skip()
            }}>Пропустить</button>
        </div>
    )
};

export default Intro;