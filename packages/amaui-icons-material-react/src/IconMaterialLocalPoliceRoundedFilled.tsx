import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPoliceRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceRoundedFilled'
      short_name='LocalPolice'

      {...props}
    >
      <path d="M10.4 14.7 12 13.5 13.55 14.7Q13.825 14.9 14.125 14.713Q14.425 14.525 14.3 14.175L13.7 12.2L15.325 10.925Q15.6 10.7 15.488 10.35Q15.375 10 15 10H13.1L12.45 8.025Q12.325 7.675 12 7.675Q11.675 7.675 11.55 8.025L10.9 10H9Q8.625 10 8.5 10.35Q8.375 10.7 8.675 10.925L10.25 12.2L9.65 14.175Q9.525 14.525 9.825 14.713Q10.125 14.9 10.4 14.7ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceRoundedFilled.displayName = 'AmauiIconMaterialLocalPoliceRoundedFilled';

export default IconMaterialLocalPoliceRoundedFilled;
