// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Importing a CSS module for styling

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Website!</h1>
        <p className={styles.subtitle}>Building amazing things with Next.js</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.sectionContent}>
            We are a team of passionate developers who love creating amazing web experiences. Check out our latest projects and learn more about what we do.
          </p>
          <Link href="/about" className={styles.link}>
            Learn More
          </Link>
        </section>
        <section className={styles.gallery}>
          <h2 className={styles.sectionTitle}>Our Work</h2>
          <div className={styles.imageGrid}>
            <Image
              src="https://dummyimage.com/300x250/000/fff" // Add an image in the public directory
              alt="Project 1"
              width={300}
              height={200}
              className={styles.image}
            />
            <Image
              src="/images/project2.jpg"
              alt="Project 2"
              width={300}
              height={200}
              className={styles.image}
            />
            <Image
              src="/images/project3.jpg"
              alt="Project 3"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2024 My Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
