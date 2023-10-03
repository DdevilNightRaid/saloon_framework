import Link from 'next/link'
import styles from './Footer.module.css'

import { MdCall, MdAlternateEmail, MdLocationOn, MdKeyboardDoubleArrowUp } from "react-icons/md";
export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.section0}>
                    <div className={styles.s0Part0}>
                        <h3 className={styles.s0P0BrandName}>Brand Name</h3>
                        <p className={styles.s0P0BrandDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur doloremque hic blanditiis id ratione consequatur unde?</p>
                    </div>
                    <div className={styles.s0Part1}>
                        <h3 className={styles.s0Part1H}>Contacts</h3>
                        <div className={styles.s0P1D}>
                            <MdCall className={styles.s0P1DIco} />
                            <p>+ 977 9817109084</p>
                        </div>
                        <div className={styles.s0P1D}>
                            <MdAlternateEmail className={styles.s0P1DIco} />
                            <p>+ 977 9817109084</p>
                        </div>
                        <div className={styles.s0P1D}>
                            <MdLocationOn className={styles.s0P1DIco} />
                            <p>+ 977 9817109084</p>
                        </div>
                    </div>
                    <div className={styles.s0Part2}>
                        <h3 className={styles.s0P2H3}>Powered By:</h3>

                        <Link href="https://www.facebook.com/themisfitofnightraid">
                            <strong className={styles.s0P2Strong}>TheMisFitOfNightRaid</strong>
                        </Link>
                    </div>
                </section>
                <section className={styles.section1}>
                    <div className={styles.s1Part0}>
                        <Link href="/">
                            <p>Terms and Condition</p>
                        </Link>
                        <Link href="/">
                            <p>Privacy Policy</p>
                        </Link>
                    </div>
                    <div className={styles.s1Part0}>
                        <p>Copyright &copy; 2023 Brand Name</p>
                        <Link href={'/#top'} className={styles.goTop}>
                            <MdKeyboardDoubleArrowUp className={styles.upArrow} />
                        </Link>
                    </div>
                </section>
            </footer>
        </>
    )
}