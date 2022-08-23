import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchAccountSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountSharpFilled'
      short_name='SwitchAccount'

      {...props}
    >
      <path d="M14 11Q15.25 11 16.125 10.125Q17 9.25 17 8Q17 6.75 16.125 5.875Q15.25 5 14 5Q12.75 5 11.875 5.875Q11 6.75 11 8Q11 9.25 11.875 10.125Q12.75 11 14 11ZM6 18V2H22V18ZM2 22V6H4V20H18V22ZM8 16H20Q18.9 14.525 17.35 13.762Q15.8 13 14 13Q12.2 13 10.65 13.762Q9.1 14.525 8 16Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountSharpFilled.displayName = 'AmauiIconMaterialSwitchAccountSharpFilled';

export default IconMaterialSwitchAccountSharpFilled;
