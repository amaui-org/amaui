import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowRoundedW100Filled'
      short_name='Slideshow'

      {...props}
    >
      <path d="M11.15 14.55 14.175 12.625Q14.35 12.5 14.425 12.35Q14.5 12.2 14.5 12Q14.5 11.8 14.425 11.65Q14.35 11.5 14.175 11.375L11.15 9.45Q10.775 9.2 10.387 9.412Q10 9.625 10 10.075V13.925Q10 14.375 10.387 14.587Q10.775 14.8 11.15 14.55ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialSlideshowRoundedW100Filled.displayName = 'AmauiIconMaterialSlideshowRoundedW100Filled';

export default IconMaterialSlideshowRoundedW100Filled;
