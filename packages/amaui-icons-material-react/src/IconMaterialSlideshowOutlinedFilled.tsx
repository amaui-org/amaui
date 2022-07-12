import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowOutlinedFilled'
      short_name='Slideshow'

      {...props}
    >
      <path d="M9.5 16.5 16.5 12 9.5 7.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialSlideshowOutlinedFilled;
