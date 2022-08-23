import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHealthAndSafetyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetyRoundedFilled'
      short_name='HealthAndSafety'

      {...props}
    >
      <path d="M12 15.5Q12.625 15.5 13.062 15.062Q13.5 14.625 13.5 14V13H14.5Q15.125 13 15.562 12.562Q16 12.125 16 11.5Q16 10.875 15.562 10.438Q15.125 10 14.5 10H13.5V9Q13.5 8.375 13.062 7.938Q12.625 7.5 12 7.5Q11.375 7.5 10.938 7.938Q10.5 8.375 10.5 9V10H9.5Q8.875 10 8.438 10.438Q8 10.875 8 11.5Q8 12.125 8.438 12.562Q8.875 13 9.5 13H10.5V14Q10.5 14.625 10.938 15.062Q11.375 15.5 12 15.5ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetyRoundedFilled.displayName = 'AmauiIconMaterialHealthAndSafetyRoundedFilled';

export default IconMaterialHealthAndSafetyRoundedFilled;
