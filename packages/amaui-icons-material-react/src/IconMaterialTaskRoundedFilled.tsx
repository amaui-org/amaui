import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskRoundedFilled'
      short_name='Task'

      {...props}
    >
      <path d="M10.25 17.3Q10.4 17.45 10.575 17.512Q10.75 17.575 10.95 17.575Q11.15 17.575 11.325 17.512Q11.5 17.45 11.65 17.3L15.9 13.05Q16.175 12.775 16.175 12.35Q16.175 11.925 15.875 11.625Q15.575 11.325 15.15 11.325Q14.725 11.325 14.425 11.625L10.925 15.125L9.525 13.725Q9.225 13.425 8.825 13.425Q8.425 13.425 8.125 13.725Q7.825 14.025 7.825 14.45Q7.825 14.875 8.125 15.15ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM14 9H18L13 4V8Q13 8.425 13.288 8.712Q13.575 9 14 9Z"/>
    </Icon>
  );
});

IconMaterialTaskRoundedFilled.displayName = 'AmauiIconMaterialTaskRoundedFilled';

export default IconMaterialTaskRoundedFilled;
