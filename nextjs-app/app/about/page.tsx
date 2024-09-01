// this is the about us page linked to the main page.tsx

import Link from 'next/link'; 
import Image from 'next/image'; 
import styles from './about.module.css'; 

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Us</h1> {/* title of the About page */}
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2> {/* mission statement */}
          <p className={styles.sectionContent}>
            Our mission is to build innovative solutions that make a difference. We strive to deliver high-quality products and services that exceed our clients&apos; expectations.
          </p> {/* just brief description of company's mission */}
        </section>
        <section className={styles.team}>
          <h2 className={styles.sectionTitle}>Meet the Team</h2> {/* Section title for team introduction */}
          <div className={styles.teamMembers}>
            <div className={styles.member}>
              <Image
                src="/images.png" 
                alt="Team Member 1"
                width={150}
                height={150}
                className={styles.memberImage}
              />
              <h3 className={styles.memberName}>Alice Johnson</h3> {/* Team member's name */}
              <p className={styles.memberRole}>CEO & Founder</p> {/* Team member's role */}
            </div>
            <div className={styles.member}>
              <Image
                src="/img2.jpg" // Another team member's image
                alt="Team Member 2"
                width={150}
                height={150}
                className={styles.memberImage}
              />
              <h3 className={styles.memberName}>Bob Smith</h3>
              <p className={styles.memberRole}>Lead Developer</p>
            </div>
            <div className={styles.member}>
              <Image
                src="/member3.jpg" // Third team member's image
                alt="Team Member 3"
                width={150}
                height={150}
                className={styles.memberImage}
              />
              <h3 className={styles.memberName}>Carol Lee</h3>
              <p className={styles.memberRole}>Designer</p>
            </div>
          </div>
        </section>
        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Contact Us</h2> {/* for contact information */}
          <p className={styles.sectionContent}>
            Have questions or want to get in touch? Feel free to <Link href="/contact" className={styles.link}>contact us</Link>. {/* Link to the contact page */}
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2024 My Website. All rights reserved. {/* copyright information */}
        </p>
      </footer>
    </div>
  );
}
