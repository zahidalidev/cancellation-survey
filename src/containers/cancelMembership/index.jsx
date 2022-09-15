import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components'
import colors from 'config/theme'
import tagIcon from 'assets/discount-tag.svg'

import 'containers/cancelMembership/styles.scss'

const CancelMembership = () => {
  const navigate = useNavigate()
  return (
    <div className='main-container'>
      <div className='cancel-card'>
        <div className='close-icon'>
          <MdClose onClick={() => navigate('/home')} size='1.5rem' />
        </div>
        <div className='card-container'>
          <div className='tag-wrapper'>
            <img src={tagIcon} className='tag-icon' alt='Discount Tag' />
          </div>
          <div className='content-container'>
            <h2 className='heading'> Before You Go... </h2>
            <h2 className='heading discount-heading'> Would 50% Off For 6 Months Help?</h2>
            <p className='description'>
              We know things REALLY sucks in the world right now - and many businesses and
              freelancers are struggling to stay afloat during this COVID-19 crises.
            </p>
            <p className='discount-description'>
              So if you could use the extra cushion, grab 50% off for 6 months.
            </p>
            <p className='safe-description'>We hope you&apos;r staying safe and healthy!</p>
            <div className='actions'>
              <Button onSubmit={() => null} name='50% OFF For 6 Months' />
              <Button
                onSubmit={() => navigate('/cancellation-survey')}
                name="No, thanks! I'll cancel"
                backgroundColor={colors.white}
                color={colors.primary}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancelMembership
