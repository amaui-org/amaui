import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSafetyCheckRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckRoundedW100Filled'
      short_name='SafetyCheck'

      {...props}
    >
      <path d="M12 15.725Q13.55 15.725 14.625 14.65Q15.7 13.575 15.7 12.025Q15.7 10.475 14.625 9.4Q13.55 8.325 12 8.325Q10.45 8.325 9.375 9.4Q8.3 10.475 8.3 12.025Q8.3 13.575 9.375 14.65Q10.45 15.725 12 15.725ZM12.35 11.875 13.9 13.425Q14.025 13.55 14.025 13.675Q14.025 13.8 13.9 13.925Q13.775 14.05 13.637 14.037Q13.5 14.025 13.4 13.925L11.775 12.3Q11.75 12.275 11.65 12V9.525Q11.65 9.375 11.75 9.275Q11.85 9.175 12 9.175Q12.15 9.175 12.25 9.275Q12.35 9.375 12.35 9.525ZM12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckRoundedW100Filled.displayName = 'AmauiIconMaterialSafetyCheckRoundedW100Filled';

export default IconMaterialSafetyCheckRoundedW100Filled;
