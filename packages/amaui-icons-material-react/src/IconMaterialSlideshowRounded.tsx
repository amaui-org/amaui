import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowRounded'
      short_name='Slideshow'

      {...props}
    >
      <path d="M11.05 15.5 15.2 12.85Q15.425 12.7 15.55 12.475Q15.675 12.25 15.675 12Q15.675 11.75 15.55 11.525Q15.425 11.3 15.2 11.15L11.05 8.5Q10.55 8.175 10.025 8.45Q9.5 8.725 9.5 9.325V14.675Q9.5 15.275 10.025 15.55Q10.55 15.825 11.05 15.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialSlideshowRounded.displayName = 'AmauiIconMaterialSlideshowRounded';

export default IconMaterialSlideshowRounded;
