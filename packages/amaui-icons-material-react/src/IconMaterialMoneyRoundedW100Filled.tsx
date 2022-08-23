import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyRoundedW100Filled'
      short_name='Money'

      {...props}
    >
      <path d="M14.7 15.35H17.65Q17.8 15.35 17.9 15.25Q18 15.15 18 15V9Q18 8.85 17.9 8.75Q17.8 8.65 17.65 8.65H14.7Q14.55 8.65 14.45 8.75Q14.35 8.85 14.35 9V15Q14.35 15.15 14.45 15.25Q14.55 15.35 14.7 15.35ZM15.05 14.65V9.35H17.3V14.65ZM9.05 15.35H12Q12.15 15.35 12.25 15.25Q12.35 15.15 12.35 15V9Q12.35 8.85 12.25 8.75Q12.15 8.65 12 8.65H9.05Q8.9 8.65 8.8 8.75Q8.7 8.85 8.7 9V15Q8.7 15.15 8.8 15.25Q8.9 15.35 9.05 15.35ZM9.4 14.65V9.35H11.65V14.65ZM6.35 15.35Q6.5 15.35 6.6 15.25Q6.7 15.15 6.7 15V9Q6.7 8.85 6.6 8.75Q6.5 8.65 6.35 8.65Q6.2 8.65 6.1 8.75Q6 8.85 6 9V15Q6 15.15 6.1 15.25Q6.2 15.35 6.35 15.35ZM4.8 18.7Q4.175 18.7 3.737 18.262Q3.3 17.825 3.3 17.2V6.8Q3.3 6.175 3.737 5.738Q4.175 5.3 4.8 5.3H19.2Q19.825 5.3 20.263 5.738Q20.7 6.175 20.7 6.8V17.2Q20.7 17.825 20.263 18.262Q19.825 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialMoneyRoundedW100Filled.displayName = 'AmauiIconMaterialMoneyRoundedW100Filled';

export default IconMaterialMoneyRoundedW100Filled;
