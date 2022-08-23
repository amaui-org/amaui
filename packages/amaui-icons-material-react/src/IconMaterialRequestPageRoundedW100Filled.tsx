import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestPageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageRoundedW100Filled'
      short_name='RequestPage'

      {...props}
    >
      <path d="M14 16.35Q14.15 16.35 14.25 16.25Q14.35 16.15 14.35 16V13Q14.35 12.85 14.25 12.75Q14.15 12.65 14 12.65H10.35V10.35H14Q14.15 10.35 14.25 10.25Q14.35 10.15 14.35 10Q14.35 9.85 14.25 9.75Q14.15 9.65 14 9.65H12.35V9Q12.35 8.85 12.25 8.75Q12.15 8.65 12 8.65Q11.85 8.65 11.75 8.75Q11.65 8.85 11.65 9V9.65H10Q9.85 9.65 9.75 9.75Q9.65 9.85 9.65 10V13Q9.65 13.15 9.75 13.25Q9.85 13.35 10 13.35H13.65V15.65H10Q9.85 15.65 9.75 15.75Q9.65 15.85 9.65 16Q9.65 16.15 9.75 16.25Q9.85 16.35 10 16.35H11.65V17Q11.65 17.15 11.75 17.25Q11.85 17.35 12 17.35Q12.15 17.35 12.25 17.25Q12.35 17.15 12.35 17V16.35ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H12.825Q13.125 3.3 13.413 3.425Q13.7 3.55 13.9 3.75L18.25 8.1Q18.45 8.3 18.575 8.587Q18.7 8.875 18.7 9.175V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialRequestPageRoundedW100Filled.displayName = 'AmauiIconMaterialRequestPageRoundedW100Filled';

export default IconMaterialRequestPageRoundedW100Filled;
