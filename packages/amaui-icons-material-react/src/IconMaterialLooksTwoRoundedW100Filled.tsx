import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoRoundedW100Filled'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M10 16.35H14.025Q14.15 16.35 14.25 16.25Q14.35 16.15 14.35 16Q14.35 15.85 14.25 15.75Q14.15 15.65 14 15.65H10.35V13.15Q10.35 12.8 10.575 12.575Q10.8 12.35 11.15 12.35H12.85Q13.5 12.35 13.925 11.925Q14.35 11.5 14.35 10.85V9.15Q14.35 8.5 13.925 8.075Q13.5 7.65 12.85 7.65H9.975Q9.85 7.65 9.75 7.75Q9.65 7.85 9.65 8Q9.65 8.15 9.75 8.25Q9.85 8.35 10 8.35H12.85Q13.2 8.35 13.425 8.575Q13.65 8.8 13.65 9.15V10.85Q13.65 11.2 13.425 11.425Q13.2 11.65 12.85 11.65H11.15Q10.5 11.65 10.075 12.075Q9.65 12.5 9.65 13.15V16Q9.65 16.15 9.75 16.25Q9.85 16.35 10 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoRoundedW100Filled.displayName = 'AmauiIconMaterialLooksTwoRoundedW100Filled';

export default IconMaterialLooksTwoRoundedW100Filled;
