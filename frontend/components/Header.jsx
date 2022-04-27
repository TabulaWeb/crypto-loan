import {useState, useEffect} from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link'

const Header = () => {

    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <div className={styles.headerLogo}>
                            <Link href="/" >
                                <a className={styles.headerLogoLink}>CryptoLoan</a>
                            </Link>
                        </div>

                        <div className={styles.headerNav}>
                            <div className={styles.headerNotice}>
                                <Image src='/notification.png' width={25} height={25} alt='notification'/>
                            </div>

                            <div className={styles.headerBalance}>
                                <Image src='/bitcoin.png' width={25} height={25} alt='balance'/>
                            </div>

                            <div className={styles.headerProfile}>
                                <div className={styles.headerProfileIcon}>
                                    <p>T</p>
                                </div>
                                <div className={styles.headerProfileMenu}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;