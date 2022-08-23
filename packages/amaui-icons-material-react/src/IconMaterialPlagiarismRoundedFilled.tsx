import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlagiarismRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlagiarismRoundedFilled'
      short_name='Plagiarism'

      {...props}
    >
      <path d="M11.45 17Q11.9 17 12.338 16.887Q12.775 16.775 13.15 16.55L14.925 18.325Q15.2 18.6 15.6 18.6Q16 18.6 16.3 18.3Q16.575 18.025 16.575 17.6Q16.575 17.175 16.3 16.9L14.55 15.15Q14.775 14.775 14.887 14.337Q15 13.9 15 13.45Q15 12 13.975 11Q12.95 10 11.5 10Q10.05 10 9.025 11.025Q8 12.05 8 13.5Q8 14.95 9 15.975Q10 17 11.45 17ZM11.5 15Q10.875 15 10.438 14.562Q10 14.125 10 13.5Q10 12.875 10.438 12.438Q10.875 12 11.5 12Q12.125 12 12.562 12.438Q13 12.875 13 13.5Q13 14.125 12.562 14.562Q12.125 15 11.5 15ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM14 9H18L13 4V8Q13 8.425 13.288 8.712Q13.575 9 14 9Z"/>
    </Icon>
  );
});

IconMaterialPlagiarismRoundedFilled.displayName = 'AmauiIconMaterialPlagiarismRoundedFilled';

export default IconMaterialPlagiarismRoundedFilled;
