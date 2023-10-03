import Image from 'next/image'
import Link from 'next/link'

// Importing CSS 
import styles from './Home.module.css'

// Importing Icons 
import { BsArrowDownRight, BsScissors } from "react-icons/bs";
import { GiRazor, GiComb } from "react-icons/gi";

// Importing Images 
import heroImg from '../images/homeImgs/homeHero.png'
import clock from '../images/homeImgs/clock-dynamic-color.png'
import haircut from '../images/homeImgs/pic1.jpg'
import styling from '../images/homeImgs/pic0.jpg'
import shaving from '../images/homeImgs/pic2.jpg'
import triming from '../images/homeImgs/pic3.jpg'

import pic0 from '../images/homeImgs/gallery/pic0.jpg'
import pic1 from '../images/homeImgs/gallery/pic1.jpg'
import pic2 from '../images/homeImgs/gallery/pic2.jpg'
import pic3 from '../images/homeImgs/gallery/pic3.jpg'
import pic4 from '../images/homeImgs/gallery/pic4.jpg'
import pic5 from '../images/homeImgs/gallery/pic5.jpg'
import pic6 from '../images/homeImgs/gallery/pic6.jpg'
import pic7 from '../images/homeImgs/gallery/pic7.jpg'

import specialist from '../images/homeImgs/team/pic3.jpg'
import mb1 from '../images/homeImgs/team/pic2.jpg'
import mb0 from '../images/homeImgs/team/pic1.jpg'

export default function Home() {
  return (
    <>
      <main id='top' className={styles.homeBody}>
        <section className={styles.section0}>
          <header className={styles.heading}>A Smooth Saloon Experience For Your Place</header>
          <p className={styles.para}>If you&apos;ve ever wondered what hairstyle suites you and how you should cut your hair, here&apos;s a list of top styles</p>
          <div className={styles.ctaBTNs}>
            <Link href='https://www.facebook.com/themisfitofnightraid'>
              <button className={styles.bookCTA}>Book an Appointment</button>
            </Link>
            <Link href={'/#down'}>
              <button className={styles.downCTA}>
                <BsArrowDownRight className={styles.downCTAArrow} />
              </button>
            </Link>
          </div>
        </section>
        <section className={styles.section1}>
          <Image
            src={heroImg}
            alt="/"
            width={300}
            height={300}
            className={styles.heroImg} />
          <div className={styles.s1Box}>
            <Image
              src={clock}
              alt="/"
              width={300}
              height={300}
              className={styles.clockImg} />
            <div className={styles.s1BCard}>
              <div className={styles.s1BCInfo}>
                <strong>Limited Offer</strong>
                <strong>Any Hair Style for</strong>
              </div>
              <strong className={styles.s1BCPrice}>Rs. 150</strong>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.s2Box}>
            <div className={styles.s2BoxImgHolder}>
              <BsScissors className={styles.s2BoxImg} />
            </div>
            <div className={styles.s2BoxServices}>
              <strong className={styles.s2BoxPrice}>Rs. 250</strong>
              <p className={styles.s2BoxService}>Haircut</p>
            </div>
          </div>
          <div className={styles.s2Box}>
            <div className={styles.s2BoxImgHolder}>
              <GiRazor className={styles.s2BoxImg} />
            </div>
            <div className={styles.s2BoxServices}>
              <strong className={styles.s2BoxPrice}>Rs. 150</strong>
              <p className={styles.s2BoxService}>Shave</p>
            </div>
          </div>
          <div className={styles.s2Box}>
            <div className={styles.s2BoxImgHolder}>
              <GiComb className={styles.s2BoxImg} />
            </div>
            <div className={styles.s2BoxServices}>
              <strong className={styles.s2BoxPrice}>Rs. 200</strong>
              <p className={styles.s2BoxService}>Hairdo</p>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.container1}>
        <div className={styles.c1Info}>
          <h2 id='down' className={styles.c1InfoTitle}>Our Services</h2>
          <h2 className={styles.c1InfoAbout}>We are here to help you provide the best possible experience.Our team of exprets are here to help you in every step of your way, from choosing the right haircuit to the end.</h2>
        </div>
        <div className={styles.c1ServiceHolder}>
          <div className={styles.c1Card}>
            <Image
              src={haircut}
              alt='haircutImg'
              width={200}
              height={500}
              className={styles.haircutImg} />
            <div className={styles.c1CardInfos}>
              <h2 className={styles.c1CardInfosH2}>Service: Haircut</h2>
              <strong className={styles.c1CardInfosStrong}>Price: Rs.200</strong>
              <Link href={'https://www.facebook.com/themisfitofnightraid/'} className={styles.c1CardInfosLink}>
                <strong>Book Now</strong>
              </Link>
            </div>
          </div>
          <div className={styles.c1Card}>
            <Image
              src={triming}
              alt='haircutImg'
              width={200}
              height={500}
              className={styles.haircutImg} />
            <div className={styles.c1CardInfos}>
              <h2 className={styles.c1CardInfosH2}>Service: Haircut</h2>
              <strong className={styles.c1CardInfosStrong}>Price: Rs.200</strong>
              <Link href={'https://www.facebook.com/themisfitofnightraid/'} className={styles.c1CardInfosLink}>
                <strong>Book Now</strong>
              </Link>
            </div>
          </div>
          <div className={styles.c1Card}>
            <Image
              src={shaving}
              alt='haircutImg'
              width={200}
              height={500}
              className={styles.haircutImg} />
            <div className={styles.c1CardInfos}>
              <h2 className={styles.c1CardInfosH2}>Service: Haircut</h2>
              <strong className={styles.c1CardInfosStrong}>Price: Rs.200</strong>
              <Link href={'https://www.facebook.com/themisfitofnightraid/'} className={styles.c1CardInfosLink}>
                <strong>Book Now</strong>
              </Link>
            </div>
          </div>
          <div className={styles.c1Card}>
            <Image
              src={styling}
              alt='haircutImg'
              width={200}
              height={500}
              className={styles.haircutImg} />
            <div className={styles.c1CardInfos}>
              <h2 className={styles.c1CardInfosH2}>Service: Haircut</h2>
              <strong className={styles.c1CardInfosStrong}>Price: Rs.200</strong>
              <Link href={'https://www.facebook.com/themisfitofnightraid/'} className={styles.c1CardInfosLink}>
                <strong>Book Now</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.c2box0}>
          <span className={styles.c2b0triangle}></span>
          <Image
            src={haircut}
            alt='haircut'
            width={300}
            height={300}
            className={styles.c2b0Img}
          />
          <span className={styles.c2b0triangle1}></span>
        </div>
        <div className={styles.c2box1}>
          <div className={styles.c2BoxInfos}>
            <h2 className={styles.c2BoxInfosH2}>Working Hours</h2>
            <p className={styles.c1BoxInfosP}>Our hours are flexible and convinent with early morning and late evening appointments</p>
          </div>
          <div className={styles.c2BoxDays}>
            <div className={styles.c2BoxDaysPart0}>
              <strong className={styles.c2BoxDaysPart0Strong}>Sunday</strong>
              <p className={styles.c2BoxDaysPart0P}>9:00AM - 9:00PM</p>
            </div>
            <div className={styles.c2BoxDaysPart1}></div>
          </div>
          <div className={styles.c2BoxDays}>
            <div className={styles.c2BoxDaysPart0}>
              <strong className={styles.c2BoxDaysPart0Strong}>Monday</strong>
              <p className={styles.c2BoxDaysPart0P}>9:00AM - 9:00PM</p>
            </div>
            <div className={styles.c2BoxDaysPart1}></div>
          </div>
          <div className={styles.c2BoxDays}>
            <div className={styles.c2BoxDaysPart0}>
              <strong className={styles.c2BoxDaysPart0Strong}>Tuesday</strong>
              <p className={styles.c2BoxDaysPart0P}>9:00AM - 9:00PM</p>
            </div>
            <div className={styles.c2BoxDaysPart1}></div>
          </div>
          <div className={styles.c2BoxDays}>
            <div className={styles.c2BoxDaysPart0}>
              <strong className={styles.c2BoxDaysPart0Strong}>Wednesday</strong>
              <p className={styles.c2BoxDaysPart0P}>9:00AM - 9:00PM</p>
            </div>
            <div className={styles.c2BoxDaysPart1}></div>
          </div>
          <div className={styles.c2BoxDays}>
            <div className={styles.c2BoxDaysPart0}>
              <strong className={styles.c2BoxDaysPart0Strong}>Thursday</strong>
              <p className={styles.c2BoxDaysPart0P}>9:00AM - 9:00PM</p>
            </div>
            <div className={styles.c2BoxDaysPart1}></div>
          </div>
          <div className={styles.c2BoxDays}>
            <div className={styles.c2BoxDaysPart0}>
              <strong className={styles.c2BoxDaysPart0Strong}>Friday</strong>
              <p className={styles.c2BoxDaysPart0P}>9:00AM - 9:00PM</p>
            </div>
            <div className={styles.c2BoxDaysPart1}></div>
          </div>
          <div className={styles.c2BoxDays}>
            <div className={styles.c2BoxDaysPart0}>
              <strong className={styles.c2BoxDaysPart0Strong}>Saturday</strong>
              <p className={styles.c2BoxDaysPart0Strong}>Closed</p>
            </div>
            <div className={styles.c2BoxDaysPart1}></div>
          </div>
        </div>

      </div>
      <div className={styles.container3}>
        <section className={styles.c3Title}>
          <h2>Featured Pictures</h2>
        </section>
        <section className={styles.c3Images}>
          <div className={styles.c3Ibox0}>
            <Image
              src={pic0}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b0Img0}
            />
            <Image
              src={pic1}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b0Img1}
            />
          </div>
          <div className={styles.c3Ibox1}>
            <Image
              src={pic4}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b1Img0}
            />
            <Image
              src={pic3}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b1Img1}
            />
          </div>
          <div className={styles.c3Ibox2}>
            <Image
              src={pic7}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b2Img0}
            />
            <Image
              src={pic5}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b2Img1}
            />
          </div>
          <div className={styles.c3Ibox3}>
            <Image
              src={pic6}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b3Img0}
            />
            <Image
              src={pic2}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c3b3Img1}
            />
          </div>
        </section>
      </div>
      <div className={styles.container4}>
        <header className={styles.c4Header}>
          <h2 className={styles.c4HH2}>Meet Our Team</h2>
          <p className={styles.c4HP}>Our skilled and experienced barbers are passionate about their work and commited  to providing the best possible service. Come in and meet the team today.</p>
        </header>
        <div className={styles.c4ImageContainer}>
          <div className={styles.c4ICBox}>
            <Image
              src={pic0}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c4TeamImg}
            />
            <div className={styles.c4ICBInfoBox}>
              <strong className={styles.c4ICBInfoBoxStrong}>Barber Name</strong>
              <p className={styles.c4ICBInfoBoxP}>Owner & Head Barber</p>
            </div>
          </div>
          <div className={styles.c4ICBox}>
            <Image
              src={mb0}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c4TeamImg}
            />
            <div className={styles.c4ICBInfoBox}>
              <strong className={styles.c4ICBInfoBoxStrong}>Barber Name</strong>
              <p className={styles.c4ICBInfoBoxP}>Master Barber</p>
            </div>
          </div>
          <div className={styles.c4ICBox}>
            <Image
              src={specialist}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c4TeamImg}
            />
            <div className={styles.c4ICBInfoBox}>
              <strong className={styles.c4ICBInfoBoxStrong}>Barber Name</strong>
              <p className={styles.c4ICBInfoBoxP}>Hair Specialist</p>
            </div>
          </div>
          <div className={styles.c4ICBox}>
            <Image
              src={mb1}
              alt='haircut'
              width={300}
              height={300}
              className={styles.c4TeamImg}
            />
            <div className={styles.c4ICBInfoBox}>
              <strong className={styles.c4ICBInfoBoxStrong}>Barber Name</strong>
              <p className={styles.c4ICBInfoBoxP}>Master Barber</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contaienr5}>
        <section className={styles.c5Frame}>
          <Image
            src={pic5}
            alt='haircut'
            width={300}
            height={300}
            className={styles.c5ClientImg}
          />
        </section>
        <section className={styles.c5Data}>
          <h2 className={styles.c5DataH2}>Client Says</h2>
          <p className={styles.c5DataP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum voluptatem necessitatibus neque tenetur dolor possimus fugiat natus officiis nostrum! Dignissimos enim possimus impedit, provident modi ullam adipisci ex voluptas sint fugiat, quod voluptatem.</p>
          <strong className={styles.c5DataS}>- Client Name</strong>
        </section>
      </div>
      <div className={styles.container6}>
        <section className={styles.c6GalleryBG}>
          <div className={styles.c6InfoContainer}>
            <h2 className={styles.c6InfoContainerH2}>Book Your Appointment Online</h2>
            <span className={styles.c6InfoContainerSpan}></span>
            <p className={styles.c6InfoContainerP}>
              Schedule your next haircut service online. Our online booking is fast and available 24/7. Book now and get ready to look your best
            </p>
            <Link href={'/'} className={styles.c6InfoContainerLink} >
              <p>Make Appointment</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
