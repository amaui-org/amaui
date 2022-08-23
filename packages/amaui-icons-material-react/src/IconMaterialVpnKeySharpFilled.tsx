import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVpnKeySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeySharpFilled'
      short_name='VpnKey'

      {...props}
    >
      <path d="M7 18Q4.5 18 2.75 16.25Q1 14.5 1 12Q1 9.5 2.75 7.75Q4.5 6 7 6Q9.025 6 10.538 7.137Q12.05 8.275 12.65 10H23V14H21V18H17V14H12.65Q12.05 15.725 10.538 16.863Q9.025 18 7 18ZM7 14Q7.825 14 8.412 13.412Q9 12.825 9 12Q9 11.175 8.412 10.587Q7.825 10 7 10Q6.175 10 5.588 10.587Q5 11.175 5 12Q5 12.825 5.588 13.412Q6.175 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialVpnKeySharpFilled.displayName = 'AmauiIconMaterialVpnKeySharpFilled';

export default IconMaterialVpnKeySharpFilled;
