import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatBoldRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldRounded'
      short_name='FormatBold'

      {...props}
    >
      <path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V6Q7 5.175 7.588 4.588Q8.175 4 9 4H12.5Q14.2 4 15.475 4.975Q16.75 5.95 16.75 7.65Q16.75 8.85 16.2 9.562Q15.65 10.275 14.9 10.65V10.85Q16 11.225 16.625 12.025Q17.25 12.825 17.25 14.1Q17.25 15.975 15.887 16.988Q14.525 18 12.65 18ZM9.65 9.7H12.3Q13.125 9.7 13.663 9.225Q14.2 8.75 14.2 8.025Q14.2 7.3 13.663 6.825Q13.125 6.35 12.3 6.35H9.65ZM9.65 15.6H12.5Q13.475 15.6 14.038 15.1Q14.6 14.6 14.6 13.775Q14.6 12.95 14.038 12.45Q13.475 11.95 12.5 11.95H9.65Z"/>
    </Icon>
  );
});

IconMaterialFormatBoldRounded.displayName = 'AmauiIconMaterialFormatBoldRounded';

export default IconMaterialFormatBoldRounded;
