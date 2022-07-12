import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontSharpFilled'
      short_name='VideoCameraFront'

      {...props}
    >
      <path d="M6 16H14V15.45Q14 13.975 12.588 13.488Q11.175 13 10 13Q8.825 13 7.413 13.488Q6 13.975 6 15.45ZM10 12Q10.825 12 11.413 11.412Q12 10.825 12 10Q12 9.175 11.413 8.587Q10.825 8 10 8Q9.175 8 8.588 8.587Q8 9.175 8 10Q8 10.825 8.588 11.412Q9.175 12 10 12ZM2 20V4H18V10.5L22 6.5V17.5L18 13.5V20Z"/>
    </Icon>
  )
});

export default IconMaterialVideoCameraFrontSharpFilled;
