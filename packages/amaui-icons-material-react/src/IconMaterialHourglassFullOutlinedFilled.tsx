import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassFullOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFullOutlinedFilled'
      short_name='HourglassFull'

      {...props}
    >
      <path d="M4 22V20H6V17Q6 15.475 6.713 14.137Q7.425 12.8 8.7 12Q7.425 11.2 6.713 9.862Q6 8.525 6 7V4H4V2H20V4H18V7Q18 8.525 17.288 9.862Q16.575 11.2 15.3 12Q16.575 12.8 17.288 14.137Q18 15.475 18 17V20H20V22Z"/>
    </Icon>
  )
});

export default IconMaterialHourglassFullOutlinedFilled;
