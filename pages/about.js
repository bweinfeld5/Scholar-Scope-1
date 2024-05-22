import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <>
            <Head>
                <title>About Us - Scholar Scope</title>
                <meta name="description" content="Learn more about Scholar Scope, our mission, and our team." />
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>About Us</h1>
                    <p className="text">At <strong>Scholar Scope</strong>, we're passionate about providing college insights through day-in-the-life videos from current students. Since our founding, we've been dedicated to helping high school students make informed college decisions.</p>
                </header>
                <section className={`${styles.story} subheading`}>
                    <h2>Our Story</h2>
                    <p className="text">Founded in [year], <strong>Scholar Scope</strong> started with a simple idea: to give prospective college students a real look at campus life. Over the years, we've grown into a trusted resource, helping thousands of students find their perfect college fit.</p>
                </section>
                <section className={`${styles.mission} subheading`}>
                    <h2>Our Mission and Vision</h2>
                    <p className="text">Our mission is to empower students with authentic insights into college life. Looking forward, our vision is to expand our reach, providing even more students with the resources they need to make the best decisions for their future.</p>
                </section>
                <section className={`${styles.team} subheading`}>
                    <h2>Meet the Team</h2>
                    <div className={styles.teamMember}>
                        <Image src="/path-to-founder-photo.jpg" alt="Founder/CEO Name" width={150} height={150} />
                        <div>
                            <h3>Founder/CEO Name</h3>
                            <p className="text">Founder/CEO Name is the visionary behind Scholar Scope. With a background in education and technology, they lead our team with passion and dedication.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <Image src="/path-to-team-member-photo.jpg" alt="Team Member Name" width={150} height={150} />
                        <div>
                            <h3>Team Member Name</h3>
                            <p className="text">Team Member Name is our [position]. With [brief background], they contribute significantly to our mission.</p>
                        </div>
                    </div>
                </section>
                <section className={`${styles.values} subheading`}>
                    <h2>Our Values</h2>
                    <ul>
                        <li className="text"><strong>Integrity:</strong> We believe in doing the right thing, always.</li>
                        <li className="text"><strong>Innovation:</strong> We're constantly seeking new ways to improve.</li>
                        <li className="text"><strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
                    </ul>
                </section>
                <section className={`${styles.impact} subheading`}>
                    <h2>Our Impact</h2>
                    <p className="text">We've helped thousands of students find their perfect college fit. Here's what some of them have to say:</p>
                    <blockquote className="custom-class">"Scholar Scope helped me find the right college!" - [Customer Name]</blockquote>
                </section>
                <section className={`${styles.contact} subheading`}>
                    <h2>Get in Touch</h2>
                    <p className="text">We'd love to hear from you! Reach out to us at [contact information] or follow us on [social media links].</p>
                </section>
            </div>
        </>
    );
};

export default About;
