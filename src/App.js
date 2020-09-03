import React, {useEffect, useState} from 'react';
import './App.css';
import InputField from './InputField';
import ResultField from './ResultField'
import 'react-bulma-components/dist/react-bulma-components.min.css';

function App() {
  const [currentPoints, setCurrentPoints] = useState(0);
  const [productPoints, setProductPoints] = useState(0);
  const [pointsNeeded, setPointsNeeded] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [monthlySpend, setMonthlySpend] = useState(0);
  const [monthlyPoints, setMonthlyPoints] = useState(0);
  const [monthsToSave, setMonthsToSave] = useState(0);
  const [yearlyPoints, setYearlyPoints] = useState(0);
  const [yearsToSave, setYearsToSave] = useState(0);


  useEffect(()=>{
    if (currentPoints != null && productPoints != null && bonusPoints != null){
      let needed = productPoints - (currentPoints + bonusPoints);
      setPointsNeeded(needed <= 0 ? 0 : needed)
    }
  }, [currentPoints, productPoints, bonusPoints])

  useEffect(()=>{
    if (monthlySpend != null) {
      setMonthlyPoints(monthlySpend*10)
      setYearlyPoints(monthlySpend*120)
      setMonthsToSave(pointsNeeded / monthlyPoints)
      setYearsToSave(pointsNeeded / yearlyPoints)
    }
  },[monthlySpend, monthlyPoints, yearlyPoints, pointsNeeded])



  function updateCurrentPoints(e){
    setCurrentPoints(parseInt(e.target.value, 10))
  }

  function updateProductPoints(e) {
    setProductPoints(parseInt(e.target.value, 10));
  }

  function updateBonusPoints(e) {
    setBonusPoints(parseInt(e.target.value, 10));
  }

  function updateMonthlySpend(e) {
    setMonthlySpend(parseInt(e.target.value, 10));
  }


  return (
    <>
      <section class='hero is-dark'>
        <div class='hero-body'>
          <div class='container has-text-centered'>
            <h1 class='title'>Plus Points Calculator</h1>
            <h2 class='subtitle'>How long will it take?</h2>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='content'>
          <div className='columns is-centered'>
            <div className='column is-one-third'>
              <h1 className='title is-4'>Customer Details</h1>
              <InputField
                fieldName={'Current Plus Points'}
                inputValue={currentPoints}
                onPointsChange={updateCurrentPoints}
              />
              <InputField
                fieldName={'Monthly Spend'}
                inputValue={monthlySpend}
                onPointsChange={updateMonthlySpend}
                setStep={50}
              />
              <div className='columns'>
                <div className='column is-half'>
                  <ResultField fieldName={'Pts/Month'} result={monthlyPoints} />
                </div>
                <div className='column is-half'>
                  <ResultField fieldName={'Pts/Year'} result={yearlyPoints} />
                </div>
              </div>
            </div>
            <div className='column is-one-third'>
              <h1 className='title is-4'>Customer Goals</h1>
              <InputField
                fieldName={'Product Points'}
                inputValue={productPoints}
                onPointsChange={updateProductPoints}
                setStep={5000}
              />
              <InputField
                fieldName={'Bonus Points'}
                inputValue={bonusPoints}
                onPointsChange={updateBonusPoints}
              />
              <ResultField
                fieldName={'Plus Points Needed'}
                result={pointsNeeded}
              />
            </div>
          </div>
          <div className='columns is-centered'>
            <div className='column is-two-thirds'>
              <h1 className='title is-4'>Time Taken</h1>
              <div className='columns is-centered'>
                <div className='column is-half'>
                  <ResultField
                    fieldName={'Years Until Redeem'}
                    result={yearsToSave}
                  />
                </div>
                <div className='column is-half'>
                  <ResultField
                    fieldName={'Months Until Redeem'}
                    result={monthsToSave}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
