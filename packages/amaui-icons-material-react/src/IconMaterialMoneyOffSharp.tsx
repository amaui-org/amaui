import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneyOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOffSharp'
      short_name='MoneyOff'

      {...props}
    >
      <path d="M14.35 8.55Q14.05 7.8 13.463 7.375Q12.875 6.95 12.05 6.95Q11.6 6.95 11.175 7.075Q10.75 7.2 10.4 7.55L8.95 6.1Q9.3 5.75 9.9 5.463Q10.5 5.175 11 5.1V3H13V5.05Q14.125 5.275 14.975 5.962Q15.825 6.65 16.25 7.75ZM19.8 22.6 15.2 18Q14.825 18.375 14.175 18.613Q13.525 18.85 13 18.9V21H11V18.85Q9.6 18.5 8.663 17.575Q7.725 16.65 7.3 15.25L9.3 14.45Q9.6 15.5 10.312 16.25Q11.025 17 12.2 17Q12.65 17 13.025 16.887Q13.4 16.775 13.75 16.55L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialMoneyOffSharp.displayName = 'AmauiIconMaterialMoneyOffSharp';

export default IconMaterialMoneyOffSharp;
