import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposurePlus2RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus2RoundedFilled'
      short_name='ExposurePlus2'

      {...props}
    >
      <path d="M7 17Q6.575 17 6.287 16.712Q6 16.425 6 16V14H4Q3.575 14 3.288 13.712Q3 13.425 3 13Q3 12.575 3.288 12.287Q3.575 12 4 12H6V10Q6 9.575 6.287 9.287Q6.575 9 7 9Q7.425 9 7.713 9.287Q8 9.575 8 10V12H10Q10.425 12 10.713 12.287Q11 12.575 11 13Q11 13.425 10.713 13.712Q10.425 14 10 14H8V16Q8 16.425 7.713 16.712Q7.425 17 7 17ZM13.375 19Q12.85 19 12.475 18.625Q12.1 18.25 12.1 17.725Q12.1 17.375 12.263 16.975Q12.425 16.575 12.675 16.325L17.1 11.8Q17.95 10.95 18.275 10.35Q18.6 9.75 18.6 9Q18.6 8.275 18.038 7.687Q17.475 7.1 16.35 7.1Q15.75 7.1 15.3 7.325Q14.85 7.55 14.525 7.95Q14.2 8.35 13.812 8.5Q13.425 8.65 13.05 8.5Q12.625 8.325 12.45 7.9Q12.275 7.475 12.5 7.125Q13.025 6.25 14 5.625Q14.975 5 16.4 5Q18.475 5 19.638 6.188Q20.8 7.375 20.8 9Q20.8 10.125 20.275 11.05Q19.75 11.975 18.65 13.1L15 16.9L15.05 17H20Q20.425 17 20.712 17.288Q21 17.575 21 18Q21 18.425 20.712 18.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus2RoundedFilled.displayName = 'AmauiIconMaterialExposurePlus2RoundedFilled';

export default IconMaterialExposurePlus2RoundedFilled;
