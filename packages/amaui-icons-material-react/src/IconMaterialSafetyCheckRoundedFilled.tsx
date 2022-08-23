import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSafetyCheckRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckRoundedFilled'
      short_name='SafetyCheck'

      {...props}
    >
      <path d="M12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM12.5 11.8 14 13.3Q14.15 13.45 14.15 13.65Q14.15 13.85 14 14Q13.85 14.15 13.65 14.15Q13.45 14.15 13.3 14L11.65 12.35Q11.6 12.3 11.5 12V9.5Q11.5 9.3 11.65 9.15Q11.8 9 12 9Q12.2 9 12.35 9.15Q12.5 9.3 12.5 9.5ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckRoundedFilled.displayName = 'AmauiIconMaterialSafetyCheckRoundedFilled';

export default IconMaterialSafetyCheckRoundedFilled;
