import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneyOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOffSharpW100Filled'
      short_name='MoneyOff'

      {...props}
    >
      <path d="M14.35 8.525Q14.05 7.775 13.463 7.35Q12.875 6.925 12.05 6.925Q11.6 6.925 11.075 7.1Q10.55 7.275 10.2 7.7L9.7 7.2Q10.075 6.775 10.613 6.537Q11.15 6.3 11.65 6.25V4.75H12.35V6.25Q13.075 6.3 13.825 6.762Q14.575 7.225 15 8.25ZM19.2 20.2 15.15 16.15Q14.725 16.8 13.95 17.25Q13.175 17.7 12.35 17.7V19.2H11.65V17.65Q10.45 17.45 9.763 16.7Q9.075 15.95 8.65 14.7L9.3 14.45Q9.625 15.5 10.325 16.25Q11.025 17 12.2 17Q13 17 13.637 16.625Q14.275 16.25 14.65 15.65L3.8 4.8L4.3 4.3L19.7 19.7Z"/>
    </Icon>
  );
});

IconMaterialMoneyOffSharpW100Filled.displayName = 'AmauiIconMaterialMoneyOffSharpW100Filled';

export default IconMaterialMoneyOffSharpW100Filled;
