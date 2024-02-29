import React from 'react'
import { Navbar } from '../components'
import styles, { layout } from '../style'
import SpringModal from '../components/CheckBalanceModal'
import { features } from '../constants'
import Button from '../components/Button'
import TransferModal from '../components/TransferbalanceModal'
import { Link } from 'react-router-dom'


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Payment = () => {
  return (
    <>
      <div className={`${styles.boxWidth} p-6 grid items-center`}>
        <Navbar />
      <section id="features" className="flex justify-center items-center p-[130px]">
     <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      All your Banking <br className="sm:block hidden" /> at one place
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience true financial sovereignty with our decentralized banking platform. Harness the power of blockchain technology to ensure security, transparency, and control over your finances like never before.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col gap-8`}>
    <SpringModal/>
    <TransferModal/>
    <Link to='/transaction-history' className='p-8 font-poppins font-medium text-[28px] text-primary bg-blue-gradient rounded-[10px] outline-none' >Transaction History</Link>
    </div>
  </section>
      </div>
      
    </>
  )
}

export default Payment
