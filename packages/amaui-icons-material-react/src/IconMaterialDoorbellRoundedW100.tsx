import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellRoundedW100'
      short_name='Doorbell'

      {...props}
    >
      <path d="M12 17.15Q12.35 17.15 12.6 16.925Q12.85 16.7 12.9 16.35H11.1Q11.15 16.7 11.4 16.925Q11.65 17.15 12 17.15ZM8.75 15.85H15.25Q15.4 15.85 15.5 15.75Q15.6 15.65 15.6 15.5Q15.6 15.35 15.5 15.25Q15.4 15.15 15.25 15.15H14.6V12.9Q14.6 11.85 14.088 10.988Q13.575 10.125 12.6 9.85V9.5Q12.6 9.25 12.425 9.075Q12.25 8.9 12 8.9Q11.75 8.9 11.575 9.075Q11.4 9.25 11.4 9.5V9.85Q10.425 10.125 9.913 10.988Q9.4 11.85 9.4 12.9V15.15H8.75Q8.6 15.15 8.5 15.25Q8.4 15.35 8.4 15.5Q8.4 15.65 8.5 15.75Q8.6 15.85 8.75 15.85ZM6 19.7Q5.725 19.7 5.513 19.487Q5.3 19.275 5.3 19V10Q5.3 9.825 5.375 9.688Q5.45 9.55 5.575 9.45L11.575 4.925Q11.675 4.85 11.775 4.812Q11.875 4.775 12 4.775Q12.125 4.775 12.225 4.812Q12.325 4.85 12.425 4.925L18.425 9.45Q18.55 9.55 18.625 9.688Q18.7 9.825 18.7 10V19Q18.7 19.275 18.488 19.487Q18.275 19.7 18 19.7ZM6 19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  );
});

IconMaterialDoorbellRoundedW100.displayName = 'AmauiIconMaterialDoorbellRoundedW100';

export default IconMaterialDoorbellRoundedW100;
