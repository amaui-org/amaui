import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellRoundedFilled'
      short_name='Doorbell'

      {...props}
    >
      <path d="M12 17.5Q12.425 17.5 12.713 17.212Q13 16.925 13 16.5H11Q11 16.925 11.288 17.212Q11.575 17.5 12 17.5ZM8.5 16H15.5Q15.7 16 15.85 15.85Q16 15.7 16 15.5Q16 15.3 15.85 15.15Q15.7 15 15.5 15H15V12.65Q15 11.55 14.4 10.65Q13.8 9.75 12.75 9.5V9.25Q12.75 8.925 12.538 8.712Q12.325 8.5 12 8.5Q11.675 8.5 11.463 8.712Q11.25 8.925 11.25 9.25V9.5Q10.2 9.75 9.6 10.65Q9 11.55 9 12.65V15H8.5Q8.3 15 8.15 15.15Q8 15.3 8 15.5Q8 15.7 8.15 15.85Q8.3 16 8.5 16ZM6 21Q5.175 21 4.588 20.413Q4 19.825 4 19V10Q4 9.525 4.213 9.1Q4.425 8.675 4.8 8.4L10.8 3.9Q11.075 3.7 11.375 3.6Q11.675 3.5 12 3.5Q12.325 3.5 12.625 3.6Q12.925 3.7 13.2 3.9L19.2 8.4Q19.575 8.675 19.788 9.1Q20 9.525 20 10V19Q20 19.825 19.413 20.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialDoorbellRoundedFilled.displayName = 'AmauiIconMaterialDoorbellRoundedFilled';

export default IconMaterialDoorbellRoundedFilled;
