'use client';

import { useState } from 'react';
import TrialPopup from './TrialPopup';

export default function TrialButton({text = 'Get in touch', className = ''}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className={className}
      >
        {text}
      </button>

      <TrialPopup visible={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
