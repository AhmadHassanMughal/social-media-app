import { Modal } from '@mui/material'
import React, { useState } from 'react'

const Dialog = () => {

    const [dialog, setDialog] = useState()
  return (
    <div className="dialog">
        <Modal onCancel={() => setDialog(false)}>

        </Modal>
    </div>
  )
}

export default Dialog