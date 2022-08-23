import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpRoundedW100Filled'
      short_name='Mp'

      {...props}
    >
      <path d="M14.25 14.6Q14.4 14.6 14.5 14.5Q14.6 14.4 14.6 14.25V13.1H16.9Q17.2 13.1 17.4 12.9Q17.6 12.7 17.6 12.4V10.1Q17.6 9.8 17.4 9.6Q17.2 9.4 16.9 9.4H14.65Q14.325 9.4 14.113 9.612Q13.9 9.825 13.9 10.15V14.25Q13.9 14.4 14 14.5Q14.1 14.6 14.25 14.6ZM14.6 12.4V10.1H16.9V12.4ZM6.75 14.6Q6.9 14.6 7 14.5Q7.1 14.4 7.1 14.25V10.1H8.9V12.75Q8.9 12.9 9 13Q9.1 13.1 9.25 13.1Q9.4 13.1 9.5 13Q9.6 12.9 9.6 12.75V10.1H11.4V14.25Q11.4 14.4 11.5 14.5Q11.6 14.6 11.75 14.6Q11.9 14.6 12 14.5Q12.1 14.4 12.1 14.25V10.1Q12.1 9.8 11.9 9.6Q11.7 9.4 11.4 9.4H7.1Q6.8 9.4 6.6 9.6Q6.4 9.8 6.4 10.1V14.25Q6.4 14.4 6.5 14.5Q6.6 14.6 6.75 14.6ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialMpRoundedW100Filled.displayName = 'AmauiIconMaterialMpRoundedW100Filled';

export default IconMaterialMpRoundedW100Filled;
