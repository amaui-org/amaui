import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffRoundedW100Filled'
      short_name='GridOff'

      {...props}
    >
      <path d="M19.4 16.9 18.7 16.2V14.7H17.2L16.5 14H18.7V10H14.7V12.2L14 11.5V10H12.5L11.8 9.3H14V5.3H10V7.5L9.3 6.8V5.3H7.8L7.1 4.6H17.9Q18.55 4.6 18.975 5.025Q19.4 5.45 19.4 6.1ZM14.7 9.3H18.7V6.1Q18.7 5.8 18.45 5.55Q18.2 5.3 17.9 5.3H14.7ZM21.15 22.15 18.4 19.4H6.1Q5.45 19.4 5.025 18.975Q4.6 18.55 4.6 17.9V5.6L1.85 2.85Q1.75 2.75 1.738 2.612Q1.725 2.475 1.85 2.35Q1.975 2.225 2.1 2.225Q2.225 2.225 2.35 2.35L21.65 21.65Q21.75 21.75 21.763 21.887Q21.775 22.025 21.65 22.15Q21.525 22.275 21.4 22.275Q21.275 22.275 21.15 22.15ZM14.7 18.7H17.7L14.7 15.7ZM10 14H13L10 11ZM10 18.7H14V15L13.7 14.7H10ZM5.3 9.3H8.3L5.3 6.25ZM5.3 14H9.3V10.3L9 10H5.3ZM9.3 18.7V14.7H5.3V17.9Q5.3 18.2 5.55 18.45Q5.8 18.7 6.1 18.7Z"/>
    </Icon>
  );
});

IconMaterialGridOffRoundedW100Filled.displayName = 'AmauiIconMaterialGridOffRoundedW100Filled';

export default IconMaterialGridOffRoundedW100Filled;
