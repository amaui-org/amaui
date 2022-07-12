import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateOutlinedFilled'
      short_name='AddPhotoAlternate'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H14V8H16V10H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM6 17H18L14.25 12L11.25 16L9 13ZM17 9V7H15V5H17V3H19V5H21V7H19V9Z"/>
    </Icon>
  )
});

export default IconMaterialAddPhotoAlternateOutlinedFilled;
