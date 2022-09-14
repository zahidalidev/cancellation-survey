import { Route, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import CancelMembership from 'containers/cancelMembership'
import CancellationSurvey from 'containers/cancellationSurvey'
import AddProduct from 'containers/addProduct'

const App = () => (
  <Suspense fallback={<div />}>
    <Routes>
      <Route path='/add-product' element={<AddProduct />} />
      <Route path='/cancel-membership' element={<CancelMembership />} />
      <Route path='/cancellation-survey' element={<CancellationSurvey />} />

      <Route path='*' element={<Navigate replace to='/cancel-membership' />} />
    </Routes>
  </Suspense>
)

export default App
