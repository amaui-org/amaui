import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapVertRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVertRoundedW100Filled'
      short_name='SwapVert'

      {...props}
    >
      <path d="M14.65 19.75V12Q14.65 11.85 14.75 11.75Q14.85 11.65 15 11.65Q15.15 11.65 15.25 11.75Q15.35 11.85 15.35 12V19.75L18.375 16.725Q18.475 16.625 18.6 16.625Q18.725 16.625 18.85 16.75Q18.975 16.875 18.975 17Q18.975 17.125 18.85 17.25L15.525 20.575Q15.4 20.7 15.275 20.75Q15.15 20.8 15 20.8Q14.85 20.8 14.725 20.75Q14.6 20.7 14.475 20.575L11.125 17.225Q11.025 17.125 11.025 17Q11.025 16.875 11.15 16.75Q11.275 16.625 11.4 16.625Q11.525 16.625 11.65 16.75ZM8.65 4.25 5.625 7.275Q5.525 7.375 5.4 7.375Q5.275 7.375 5.15 7.25Q5.025 7.125 5.025 7Q5.025 6.875 5.15 6.75L8.475 3.425Q8.6 3.3 8.725 3.25Q8.85 3.2 9 3.2Q9.15 3.2 9.275 3.25Q9.4 3.3 9.525 3.425L12.875 6.775Q12.975 6.875 12.975 7Q12.975 7.125 12.85 7.25Q12.725 7.375 12.6 7.375Q12.475 7.375 12.35 7.25L9.35 4.25V12Q9.35 12.15 9.25 12.25Q9.15 12.35 9 12.35Q8.85 12.35 8.75 12.25Q8.65 12.15 8.65 12Z"/>
    </Icon>
  );
});

IconMaterialSwapVertRoundedW100Filled.displayName = 'AmauiIconMaterialSwapVertRoundedW100Filled';

export default IconMaterialSwapVertRoundedW100Filled;
