import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchRightRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightRoundedW100'
      short_name='SwitchRight'

      {...props}
    >
      <path d="M14.7 15.35 18.05 12 14.7 8.65ZM15.275 15.75Q14.925 16.1 14.463 15.913Q14 15.725 14 15.225V8.775Q14 8.275 14.463 8.087Q14.925 7.9 15.275 8.25L18.5 11.475Q18.625 11.6 18.675 11.725Q18.725 11.85 18.725 12Q18.725 12.15 18.675 12.275Q18.625 12.4 18.5 12.525ZM8.725 15.75 5.5 12.525Q5.375 12.4 5.325 12.275Q5.275 12.15 5.275 12Q5.275 11.85 5.325 11.725Q5.375 11.6 5.5 11.475L8.725 8.25Q9.075 7.9 9.538 8.087Q10 8.275 10 8.775V15.225Q10 15.725 9.538 15.913Q9.075 16.1 8.725 15.75Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightRoundedW100.displayName = 'AmauiIconMaterialSwitchRightRoundedW100';

export default IconMaterialSwitchRightRoundedW100;
