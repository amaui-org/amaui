import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledSharp'
      short_name='HourglassDisabled'

      {...props}
    >
      <path d="M20.475 23.3 19.175 22H4V20H6V17Q6 15.475 6.713 14.137Q7.425 12.8 8.7 12Q7.9 11.5 7.338 10.8Q6.775 10.1 6.425 9.25L0.675 3.5L2.1 2.075L21.9 21.875ZM15.05 12.15 13.55 10.675Q14.625 10.225 15.312 9.238Q16 8.25 16 7V4H8V5.125L6.875 4L4.875 2H20V4H18V7Q18 8.6 17.225 9.975Q16.45 11.35 15.05 12.15ZM8 20H16V18.825L10.475 13.3Q9.375 13.75 8.688 14.75Q8 15.75 8 17ZM18 20Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledSharp.displayName = 'AmauiIconMaterialHourglassDisabledSharp';

export default IconMaterialHourglassDisabledSharp;
