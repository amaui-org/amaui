import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPsychologySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologySharpFilled'
      short_name='Psychology'

      {...props}
    >
      <path d="M9 21V18H6V13H4.5Q4.25 13 4.062 12.738Q3.875 12.475 4.1 12.2L6.025 9.65Q6.15 7 8.1 5Q10.05 3 13 3Q15.9 3 17.95 5.05Q20 7.1 20 10Q20 12.125 18.888 13.8Q17.775 15.475 16 16.35V21ZM12 14H14L14.15 12.75Q14.35 12.675 14.5 12.587Q14.65 12.5 14.8 12.35L15.95 12.85L16.95 11.15L15.95 10.4Q16 10.2 16 10Q16 9.8 15.95 9.6L16.95 8.85L15.95 7.15L14.8 7.65Q14.65 7.5 14.5 7.412Q14.35 7.325 14.15 7.25L14 6H12L11.85 7.25Q11.65 7.325 11.5 7.412Q11.35 7.5 11.2 7.65L10.05 7.15L9.05 8.85L10.05 9.6Q10 9.8 10 10Q10 10.2 10.05 10.4L9.05 11.15L10.05 12.85L11.2 12.35Q11.35 12.5 11.5 12.587Q11.65 12.675 11.85 12.75ZM13 11.5Q12.35 11.5 11.925 11.075Q11.5 10.65 11.5 10Q11.5 9.35 11.925 8.925Q12.35 8.5 13 8.5Q13.65 8.5 14.075 8.925Q14.5 9.35 14.5 10Q14.5 10.65 14.075 11.075Q13.65 11.5 13 11.5Z"/>
    </Icon>
  );
});

IconMaterialPsychologySharpFilled.displayName = 'AmauiIconMaterialPsychologySharpFilled';

export default IconMaterialPsychologySharpFilled;
