import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassBottomSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassBottomSharp'
      short_name='HourglassBottom'

      {...props}
    >
      <path d="M12 11Q13.65 11 14.825 9.825Q16 8.65 16 7V4H8V7Q8 8.65 9.175 9.825Q10.35 11 12 11ZM4 22V20H6V17Q6 15.475 6.713 14.137Q7.425 12.8 8.7 12Q7.425 11.2 6.713 9.862Q6 8.525 6 7V4H4V2H20V4H18V7Q18 8.525 17.288 9.862Q16.575 11.2 15.3 12Q16.575 12.8 17.288 14.137Q18 15.475 18 17V20H20V22Z"/>
    </Icon>
  );
});

IconMaterialHourglassBottomSharp.displayName = 'AmauiIconMaterialHourglassBottomSharp';

export default IconMaterialHourglassBottomSharp;
