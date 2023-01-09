import { Modal } from '@mui/material';
import React from 'react';

export default function CreatePostModal() {
  const body = 'This is body modal'
  return <div>
    <Modal open={false} onClose={}>
      {body}

    </Modal>
  </div>;
}
