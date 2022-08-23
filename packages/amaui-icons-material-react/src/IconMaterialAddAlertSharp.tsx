import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAlertSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAlertSharp'
      short_name='AddAlert'

      {...props}
    >
      <path d="M11 15H13V13H15V11H13V9H11V11H9V13H11ZM4 19V17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V2H13.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H20V19ZM12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM8 17H16V10Q16 8.35 14.825 7.175Q13.65 6 12 6Q10.35 6 9.175 7.175Q8 8.35 8 10Z"/>
    </Icon>
  );
});

IconMaterialAddAlertSharp.displayName = 'AmauiIconMaterialAddAlertSharp';

export default IconMaterialAddAlertSharp;
