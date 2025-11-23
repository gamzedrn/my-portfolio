@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

/* RESET CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  scroll-behavior: smooth;
}

:root {
  --bg-color: #0a0a0a;
  --second-bg-color: #1a1a1a;
  --text-color: #ffffff;
  --main-color: #ffffff;
  --accent-color: #e0e0e0;
  --muted-color: #b0b0b0;
}

html {
  font-size: 60%;
  overflow-x: hidden;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
}

span {
  color: var(--main-color);
}

section {
  min-height: 100vh;
  padding: 10rem 12% 10rem;
}

/* HEADER START*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 4rem 12% 4rem;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 3rem;
  color: var(--text-color);
  font-weight: 800;
  cursor: pointer;
  text-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  transition: 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.1);
}

.navbar a {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-left: 4rem;
  font-weight: 500;
  transition: 0.3s ease;
  border-bottom: 3px solid transparent;
}

.navbar a:hover,
.navbar a:active {
  color: var(--muted-color);
  border-bottom: 3px solid var(--muted-color);
}

#menu-icon {
  font-size: 3.6rem;
  color: var(--main-color);
  display: none;
}
/* HEADER END*/

/* HOME START*/
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  text-align: left;
  margin-top: 3rem;
}

.home-content h1 {
  font-size: 7rem;
  font-weight: 700;
  margin-top: 1.5rem;
  line-height: 1;
}

.home-content h3 {
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: 3.5rem;
}

.home-img {
  border-radius: 50%;
}

.home-img img {
  width: 20vw;
  position: relative;
  top: 3rem;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: 0.4s ease-in-out;
}

.home-img img:hover {
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.3),
    0 0 60px rgba(255, 255, 255, 0.2);
}

.home-content p {
  font-size: 1.8rem;
  font-weight: 550;
  line-height: 1.8;
  max-width: 1000px;
}

.social-icons a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--accent-color);
  font-size: 2.5rem;
  border-radius: 50%;
  color: var(--accent-color);
  margin: 3rem 1.5rem 3rem 0;
  transition: 300ms ease-in-out;
}

.social-icons a:hover {
  color: var(--bg-color);
  transform: scale(1.3) translateY(-5px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  background-color: var(--accent-color);
}

.btn {
  display: inline;
  padding: 1rem 2.8rem;
  background-color: var(--accent-color);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  border-radius: 4rem;
  font-size: 1.6rem;
  color: black;
  border: 2px solid transparent;
  letter-spacing: 0.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 300ms ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.btn-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-group a:nth-of-type(2) {
  background-color: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 25px transparent;
}

.btn-group a:nth-of-type(2):hover {
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
  background-color: var(--accent-color);
  color: black;
}

.text-animation {
  font-size: 34px;
  font-weight: 600;
  color: var(--accent-color);
  display: inline-block;
}

.text-animation span {
  position: relative;
  display: inline-block;
}

.text-animation span::before {
  content: "Bilgisayar Mühendisiyim";
  color: var(--accent-color);
}

.text-animation span::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: var(--bg-color);
  border-left: 3px solid var(--accent-color);
  animation: typing 4s steps(22) 0s forwards, pause 2s 4s forwards,
    erase 4s steps(22) 6s forwards, cursor 0.6s infinite;
  animation-iteration-count: infinite;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

@keyframes erase {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes pause {
  from {
    width: 0;
  }
  to {
    width: 0;
  }
}
/* HOME END*/

/* EDUCATION START*/
.heading {
  font-size: 8rem;
  text-align: center;
  margin: 5rem 0;
}

.education {
  background-color: var(--second-bg-color);
  padding: 10rem 15px;
}

.timeline-items {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.timeline-items::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 100%;
  background-color: var(--accent-color);
  left: calc(50% - 1px);
}

.timeline-item {
  margin-bottom: 40px;
  width: 100%;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:nth-child(odd) {
  padding-right: calc(50% + 30px);
}

.timeline-item:nth-child(even) {
  padding-left: calc(50% + 30px);
}

.timeline-dot {
  height: 21px;
  width: 21px;
  background-color: var(--accent-color);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  top: 10px;
}

.timeline-date {
  font-size: 21px;
  font-weight: 800;
  color: #fff;
  margin: 6px 0 15px;
}

.timeline-content {
  background-color: var(--bg-color);
  border: 2px solid var(--accent-color);
  padding: 30px 50px;
  border-radius: 4rem;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.timeline-content:hover {
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.timeline-content h3 {
  font-size: 20px;
  color: #fff;
  margin: 0 0 10px;
  font-weight: 500;
}

.timeline-content p {
  color: #fff;
  font-size: 19px;
  font-weight: 300;
  line-height: 22px;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--accent-color);
  border-radius: 4rem;
}

::-webkit-scrollbar-track {
  background-color: var(--bg-color);
  width: 50px;
}
/*EDUCATION END*/

/* INTERNSHIPS START*/
.internships {
  background-color: var(--bg-color);
  color: black;
}

.internships h2 {
  color: #fff;
  margin-bottom: 5rem;
}

.internships-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2.5rem;
}

.internships-box {
  background: linear-gradient(135deg, #ffffff, #e0e0e0);
  height: 390px;
  border-radius: 3rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.internships-box:hover {
  background: #ffffff;
  border: 2px solid var(--accent-color);
  transform: scale(1);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}

.internships-box .internships-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  min-height: 200px;
  justify-content: left;
  align-items: baseline;
  padding: 5rem 5rem;
}

.internships-info h4 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}

.internships-info p {
  font-size: 1.6rem;
  font-weight: 600;
  max-height: 100px;
  line-height: 1.7;
  margin: auto;
}
/* INTERNSHIPS END*/

/* SKILLS START */
.skills {
  background-color: var(--second-bg-color);
  padding: 10rem 12%;
}

.skills h2 {
  text-align: center;
  font-size: 8rem;
  color: var(--text-color);
  margin-bottom: 5rem;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  align-items: center;
}

.skill-box {
  background-color: var(--bg-color);
  border: 2px solid var(--accent-color);
  border-radius: 3rem;
  padding: 4rem 2rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.skill-box:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
  background-color: var(--accent-color);
  color: black;
}
/* SKILLS END */

/* CERTIFICATES START */
.certificates-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
}

.certificate-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  color: #fff;
  padding: 3rem 2.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
}

.certificate-card h4 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

.certificate-card p {
  font-size: 1.8rem;
  line-height: 1.6;
  opacity: 0.9;
}

.certificate-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}
/* CERTIFICATES END */

/* PROJECTS START */
.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 4rem;
}

.project-card {
  background-color: var(--second-bg-color);
  color: black;
  padding: 3rem 2.5rem;
  border-radius: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  transition: transform 0.4s ease, background-color 0.4s ease,
    box-shadow 0.4s ease;
  cursor: pointer;
}

.project-card h3 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #fff;
}

.project-card p {
  font-size: 1.8rem;
  line-height: 1.6;
  opacity: 0.9;
  color: #fff;
}

.project-card:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

.project-card:nth-child(1),
.project-card:nth-child(2),
.project-card:nth-child(3),
.project-card:nth-child(4) {
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
}
/* PROJECTS END */

/* TESTIMONIALS START */
.testimonials {
  background-color: var(--second-bg-color);
}

.testimonials-box {
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.testimonial-item {
  min-height: 550px;
  max-width: 450px;
  background-color: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  margin: 0 2rem;
  padding: 30px 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  color: #fff;
  transition: 0.4s ease-in-out;
}

.testimonial-item:hover {
  border: 1px solid var(--accent-color);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

.testimonial-item h2 {
  font-size: 2.8rem;
  line-height: 1.3;
}

.testimonial-item h2 span {
  font-size: 1.7rem;
  font-weight: 400;
  color: #fff;
  opacity: 0.8;
  display: block;
  margin-top: 5px;
}

.testimonial-item p {
  font-size: 1.8rem;
}

.bx-star {
  color: gold;
  font-size: 2rem;
}

.bxs-user {
  font-size: 2rem;
  color: var(--accent-color);
  transition: 0.3s ease;
}

.bxs-user:hover {
  color: #fff;
}

.testimonial-item:nth-child(1),
.testimonial-item:nth-child(2) {
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
}
/* TESTIMONIALS END */

/* CONTACT START */
#contact {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 10rem 12%;
  text-align: center;
}

#contact h2 {
  font-size: 8rem;
  margin-bottom: 3rem;
}

#contact p {
  font-size: 2rem;
  margin-bottom: 4rem;
  color: #ccc;
}

#contact form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 600px;
  margin: auto;
}

#contact input,
#contact textarea {
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 2rem;
  border: 2px solid var(--accent-color);
  background-color: var(--second-bg-color);
  color: var(--text-color);
  font-size: 1.8rem;
  outline: none;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
  transition: 0.3s ease-in-out;
}

#contact input:hover,
#contact textarea:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

#contact .send {
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  border-radius: 3rem;
  border: 2px solid var(--accent-color);
  background-color: transparent;
  color: var(--text-color);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
}

#contact .send:hover {
  background-color: var(--accent-color);
  color: black;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
}
/* CONTACT END */

/* FOOTER START */
.footer {
  background-color: var(--bg-color);
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid var(--accent-color);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
}

.footer-content h3 {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.footer-content p {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1.2rem;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer-socials a {
  font-size: 2.5rem;
  color: var(--accent-color);
  transition: 0.3s ease-in-out;
}

.footer-socials a:hover {
  color: #fff;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.footer-bottom {
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #666;
}
/* FOOTER END */

/* MEDIA QUERIES START */
@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }

  section {
    padding: 8rem 8%;
  }

  .home {
    gap: 8rem;
  }

  .internships-container,
  .skills-container,
  .projects-container,
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  #menu-icon {
    display: block;
    cursor: pointer;
  }

  .navbar {
    position: absolute;
    top: 100%;
    right: 0;
    width: 50%;
    padding: 1rem 3%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    border-bottom-left-radius: 2rem;
    border-left: 2px solid var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
    display: none;
    flex-direction: column;
    gap: 2rem;
    text-align: right;
    transition: 0.4s ease;
  }

  .navbar.active {
    display: block;
  }

  .navbar a {
    display: block;
    font-size: 2rem;
    margin: 3rem 0;
    color: #fff;
  }

  .home {
    flex-direction: column-reverse;
    margin: 5rem 4rem;
  }

  .home-img img {
    width: 35vw;
  }

  .home-content h3 {
    font-size: 2.6rem;
  }

  .home-content h1 {
    font-size: 8rem;
    margin-top: 3rem;
  }

  .heading {
    font-size: 6rem;
  }

  .timeline-items::before {
    left: 7px;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    padding-left: 37px;
  }

  .timeline-dot {
    left: 0;
  }

  .internships-container,
  .skills-container,
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .testimonials-box .wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }

  .navbar a {
    font-size: 1.5rem;
  }

  section {
    padding: 7rem 6%;
  }

  .home-content h1 {
    font-size: 5rem;
  }

  .home-img img {
    width: 48vw;
  }

  .home-content p {
    font-size: 2rem;
    margin: 0;
  }

  .internships-container,
  .skills-container,
  .projects-container {
    grid-template-columns: 1fr;
  }

  .internships-box {
    height: auto;
    padding-bottom: 3rem;
  }

  .skills h2,
  .projects h2 {
    font-size: 6rem;
  }

  .certificate-card {
    padding: 2.5rem;
  }

  .testimonial-item {
    max-width: 100%;
    min-height: 420px;
    padding: 20px 30px;
  }

  #contact form {
    max-width: 90%;
  }
}

@media (max-width: 576px) {
  html {
    font-size: 45%;
  }

  .header {
    padding: 2rem 5%;
  }

  .header a {
    font-size: 2.2rem;
  }

  .logo {
    font-size: 2.5rem;
  }

  .navbar {
    width: 60%;
  }

  .home {
    gap: 5rem;
    width: 100%;
    margin: 0;
  }

  .home-content h1 {
    font-size: 5rem;
    margin-bottom: 5rem;
  }

  .home-content h3 {
    font-size: 3.5rem;
  }

  .text-animation span {
    display: block;
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }

  .text-animation span::after {
    content: "";
    background-color: var(--bg-color);
    width: calc(100% + 8px);
    height: 100%;
    position: absolute;
    border-left: 3px solid var(--bg-color);
    right: -8px;
  }

  .home-content p {
    font-size: 2rem;
  }

  .home-img img {
    width: 55vw;
  }

  .home-content .social-icons,
  .btn-group {
    margin: 0 auto;
  }

  .home-content .social-icons a {
    width: 6rem;
    height: 6rem;
  }

  .home-content .btn-group .btn {
    font-size: 2rem;
  }

  .education {
    width: 100%;
    padding: 8rem 5% !important;
  }

  .education h2 {
    font-size: 5rem !important;
    margin-bottom: 3rem !important;
  }

  .timeline-items::before {
    left: 10px !important;
  }

  .timeline-item {
    margin-bottom: 30px;
    width: 100%;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    padding-left: 45px !important;
    padding-right: 15px !important;
  }

  .timeline-dot {
    left: 3px !important;
    width: 18px;
    height: 18px;
  }

  .timeline-date {
    font-size: 1.8rem !important;
    font-weight: 700;
    margin: 0 0 10px 0;
    color: var(--accent-color);
  }

  .timeline-content {
    padding: 20px 15px !important;
    border-radius: 2rem;
    margin: 0;
    width: 100% !important;
  }

  .timeline-content h3 {
    font-size: 2rem !important;
    margin-bottom: 8px;
    color: var(--accent-color);
  }

  .timeline-content p {
    font-size: 1.6rem !important;
    line-height: 1.5 !important;
    word-break: keep-all !important;
    white-space: normal !important;
    text-align: left;
  }

  .timeline-content strong {
    display: block;
    margin-bottom: 5px;
    font-size: 1.7rem;
  }

  h2 .heading {
    font-size: 4.5rem !important;
  }

  .internships-box {
    padding: 3rem 2rem;
    overflow: hidden;
  }

  .skills-container {
    gap: 2rem;
  }

  .skill-box {
    padding: 3rem 2rem;
    font-size: 2rem;
  }

  .project-card {
    padding: 2.5rem 2rem;
  }

  .testimonial-item {
    padding: 20px;
    min-height: 380px;
  }

  #contact input,
  #contact textarea {
    font-size: 1.6rem;
  }

  #contact .send {
    font-size: 1.6rem;
    padding: 1.2rem 2.5rem;
  }

  .footer-content h3 {
    font-size: 2.2rem;
  }

  .footer-socials a {
    font-size: 2rem;
  }

  .footer-bottom {
    font-size: 1.1rem;
  }
}

@media (max-width: 400px) {
  .timeline-content {
    padding: 15px 12px !important;
  }

  .timeline-content p {
    font-size: 1.5rem !important;
  }

  .timeline-date {
    font-size: 1.6rem !important;
  }
}
/* MEDIA QUERIES END */
