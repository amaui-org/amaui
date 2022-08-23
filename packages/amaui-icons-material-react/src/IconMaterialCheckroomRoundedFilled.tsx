import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckroomRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomRoundedFilled'
      short_name='Checkroom'

      {...props}
    >
      <path d="M3 20Q2.275 20 2.05 19.312Q1.825 18.625 2.4 18.2L11 11.75V10Q11 9.575 11.275 9.287Q11.55 9 11.975 9Q12.625 9.025 13.062 8.587Q13.5 8.15 13.5 7.5Q13.5 6.875 13.075 6.438Q12.65 6 12.025 6Q11.575 6 11.188 6.262Q10.8 6.525 10.625 6.95Q10.5 7.225 10.262 7.362Q10.025 7.5 9.725 7.5Q9.175 7.5 8.887 7.037Q8.6 6.575 8.825 6.075Q9.25 5.125 10.1 4.562Q10.95 4 12 4Q13.45 4 14.475 5Q15.5 6 15.5 7.45Q15.5 8.65 14.8 9.575Q14.1 10.5 13 10.85V11.75L21.6 18.2Q22.175 18.625 21.95 19.312Q21.725 20 21 20ZM6 18H18L12 13.5Z"/>
    </Icon>
  );
});

IconMaterialCheckroomRoundedFilled.displayName = 'AmauiIconMaterialCheckroomRoundedFilled';

export default IconMaterialCheckroomRoundedFilled;
