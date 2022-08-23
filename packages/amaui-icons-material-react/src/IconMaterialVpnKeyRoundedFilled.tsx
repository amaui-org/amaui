import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVpnKeyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyRoundedFilled'
      short_name='VpnKey'

      {...props}
    >
      <path d="M7 18Q4.5 18 2.75 16.25Q1 14.5 1 12Q1 9.5 2.75 7.75Q4.5 6 7 6Q9.025 6 10.538 7.137Q12.05 8.275 12.65 10H21Q21.825 10 22.413 10.587Q23 11.175 23 12Q23 12.9 22.375 13.45Q21.75 14 21 14V16Q21 16.825 20.413 17.413Q19.825 18 19 18Q18.175 18 17.587 17.413Q17 16.825 17 16V14H12.65Q12.05 15.725 10.538 16.863Q9.025 18 7 18ZM7 14Q7.825 14 8.412 13.412Q9 12.825 9 12Q9 11.175 8.412 10.587Q7.825 10 7 10Q6.175 10 5.588 10.587Q5 11.175 5 12Q5 12.825 5.588 13.412Q6.175 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyRoundedFilled.displayName = 'AmauiIconMaterialVpnKeyRoundedFilled';

export default IconMaterialVpnKeyRoundedFilled;
