import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Tracking from '../../components/Tracking/Tracking';
import CheckoutStepOne from '../../components/CheckoutStepOne/CheckoutStepOne';
import CheckoutStepTwo from '../../components/CheckoutStepTwo/CheckoutStepTwo';
import CheckoutStepThree from '../../components/CheckoutStepThree/CheckoutStepThree';

function Checkout() {
  const [step, setStep]= useState(1)
  return (
    <Layout>
      <>
      <Tracking step={step} />
      {
        step ===1 && <CheckoutStepOne setStep={setStep}/>
      }
      {
        step ===2 && <CheckoutStepTwo setStep={setStep}/>
      }
      {
        step ===3 && <CheckoutStepThree setStep={setStep}/>
      }
      </>
    </Layout>
  )
}

export default Checkout;