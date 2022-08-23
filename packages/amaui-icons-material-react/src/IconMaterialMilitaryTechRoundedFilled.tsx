import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMilitaryTechRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechRoundedFilled'
      short_name='MilitaryTech'

      {...props}
    >
      <path d="M10.15 21.05Q9.875 21.275 9.562 21.062Q9.25 20.85 9.375 20.5L10.1 18.2L8.275 16.9Q7.975 16.7 8.1 16.35Q8.225 16 8.575 16H10.8L11.5 13.7L7.95 11.6Q7.5 11.325 7.25 10.875Q7 10.425 7 9.85V4Q7 3.175 7.588 2.587Q8.175 2 9 2H15Q15.825 2 16.413 2.587Q17 3.175 17 4V9.85Q17 10.425 16.75 10.875Q16.5 11.325 16.05 11.6L12.5 13.7L13.2 16H15.425Q15.775 16 15.9 16.35Q16.025 16.7 15.725 16.9L13.9 18.2L14.625 20.5Q14.75 20.85 14.438 21.062Q14.125 21.275 13.85 21.05L12 19.65ZM12 11.65 13 11.05V5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5V11.05Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechRoundedFilled.displayName = 'AmauiIconMaterialMilitaryTechRoundedFilled';

export default IconMaterialMilitaryTechRoundedFilled;
