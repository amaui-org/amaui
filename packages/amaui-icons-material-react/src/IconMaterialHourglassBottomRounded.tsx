import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassBottomRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassBottomRounded'
      short_name='HourglassBottom'

      {...props}
    >
      <path d="M12 11Q13.65 11 14.825 9.825Q16 8.65 16 7V4H8V7Q8 8.65 9.175 9.825Q10.35 11 12 11ZM19 22H5Q4.575 22 4.287 21.712Q4 21.425 4 21Q4 20.575 4.287 20.288Q4.575 20 5 20H6V17Q6 15.475 6.713 14.137Q7.425 12.8 8.7 12Q7.425 11.2 6.713 9.862Q6 8.525 6 7V4H5Q4.575 4 4.287 3.712Q4 3.425 4 3Q4 2.575 4.287 2.287Q4.575 2 5 2H19Q19.425 2 19.712 2.287Q20 2.575 20 3Q20 3.425 19.712 3.712Q19.425 4 19 4H18V7Q18 8.525 17.288 9.862Q16.575 11.2 15.3 12Q16.575 12.8 17.288 14.137Q18 15.475 18 17V20H19Q19.425 20 19.712 20.288Q20 20.575 20 21Q20 21.425 19.712 21.712Q19.425 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialHourglassBottomRounded.displayName = 'AmauiIconMaterialHourglassBottomRounded';

export default IconMaterialHourglassBottomRounded;
