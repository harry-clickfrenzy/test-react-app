import React, { useEffect} from 'react'
import { useRokt } from './rokt-context'

// Imagine this is the component for the confirmation page route
export function ConfirmationPage() {
  // Obtain the user details from an internal location
  const userDetails = {email: 'singh.harry2601@clickfrenzy.com.au'}
  // Obtain the Rokt singleton
  const rokt = useRokt()
//   const placeholderRef = useRef(null)

  useEffect(() => {
    // Return if the target element hasn't rendered
    // Return if the attributes have not arrived
    console.log(userDetails)
    if (!userDetails.email) {
      return
    }
    // Set your attributes with the relevant information
    rokt.setAttributes({ email: userDetails.email })
    // Indicate to Rokt that you'd like to begin the selection
    rokt.triggerPageChange('checkout.page')

    // When the page closes, remove all the Rokt placements
    return () => {
      rokt.closeAll()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Confirmation Page</h1>
      {/* <div
        ref={placeholderRef}
        id="rokt-placeholder"/> */}
    </div>
  )
}
