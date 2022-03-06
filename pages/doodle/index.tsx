import type { NextPage } from 'next'
import styles from './Doodle.module.css'

const Doodle: NextPage = (...props) => {

    // The props
    // const {exampleProp} = props;

    return (
        <>
            <div className={styles.center}>
                <div className={styles.doodle}>
                    <div className={[styles.eye, styles.left].join(' ')}></div>
                    <div className={[styles.eye, styles.right].join(' ')}></div>
                </div>
            </div>
        </>
    );
}

export default Doodle;