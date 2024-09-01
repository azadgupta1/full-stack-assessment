// // app/about/page.tsx
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './about.module.css'; // Importing a CSS module for styling

// export default function AboutPage() {
//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1 className={styles.title}>About Us</h1>
//       </header>
//       <main className={styles.main}>
//         <section className={styles.section}>
//           <h2 className={styles.sectionTitle}>Our Mission</h2>
//           <p className={styles.sectionContent}>
//             Our mission is to build innovative solutions that make a difference. We strive to deliver high-quality products and services that exceed our clients' expectations.
//           </p>
//         </section>
//         <section className={styles.team}>
//           <h2 className={styles.sectionTitle}>Meet the Team</h2>
//           <div className={styles.teamMembers}>
//             <div className={styles.member}>
//               <Image
//                 src="/images/member1.jpg" // Add an image in the public directory
//                 alt="Team Member 1"
//                 width={150}
//                 height={150}
//                 className={styles.memberImage}
//               />
//               <h3 className={styles.memberName}>Alice Johnson</h3>
//               <p className={styles.memberRole}>CEO & Founder</p>
//             </div>
//             <div className={styles.member}>
//               <Image
//                 src="/images/member2.jpg"
//                 alt="Team Member 2"
//                 width={150}
//                 height={150}
//                 className={styles.memberImage}
//               />
//               <h3 className={styles.memberName}>Bob Smith</h3>
//               <p className={styles.memberRole}>Lead Developer</p>
//             </div>
//             <div className={styles.member}>
//               <Image
//                 src="/images/member3.jpg"
//                 alt="Team Member 3"
//                 width={150}
//                 height={150}
//                 className={styles.memberImage}
//               />
//               <h3 className={styles.memberName}>Carol Lee</h3>
//               <p className={styles.memberRole}>Designer</p>
//             </div>
//           </div>
//         </section>
//         <section className={styles.contact}>
//           <h2 className={styles.sectionTitle}>Contact Us</h2>
//           <p className={styles.sectionContent}>
//             Have questions or want to get in touch? Feel free to <Link href="/contact" className={styles.link}>contact us</Link>.
//           </p>
//         </section>
//       </main>
//       <footer className={styles.footer}>
//         <p className={styles.footerText}>
//           © 2024 My Website. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }


// app/about/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css'; // Importing a CSS module for styling

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionContent}>
            Our mission is to build innovative solutions that make a difference. We strive to deliver high-quality products and services that exceed our clients&apos; expectations.
          </p>
        </section>
        <section className={styles.team}>
          <h2 className={styles.sectionTitle}>Meet the Team</h2>
          <div className={styles.teamMembers}>
            <div className={styles.member}>
              <Image
                src="https://dummyimage.com/300x250/000/fff" // Add an image in the public directory
                alt="Team Member 1"
                width={150}
                height={150}
                className={styles.memberImage}
              />
              <h3 className={styles.memberName}>Alice Johnson</h3>
              <p className={styles.memberRole}>CEO & Founder</p>
            </div>
            <div className={styles.member}>
              <Image
                src="/images/member2.jpg"
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
                src="/images/member3.jpg"
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
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionContent}>
            Have questions or want to get in touch? Feel free to <Link href="/contact" className={styles.link}>contact us</Link>.
          </p>
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


