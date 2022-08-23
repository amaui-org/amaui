import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTouchAppRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppRoundedW100Filled'
      short_name='TouchApp'

      {...props}
    >
      <path d="M9.95 9.325Q9 8.825 8.4 8.037Q7.8 7.25 7.8 6.15Q7.8 4.575 8.863 3.437Q9.925 2.3 11.5 2.3Q13.075 2.3 14.138 3.437Q15.2 4.575 15.2 6.15Q15.2 7.25 14.588 8.075Q13.975 8.9 13.05 9.325V6.15Q13.05 5.475 12.613 5.037Q12.175 4.6 11.5 4.6Q10.825 4.6 10.388 5.037Q9.95 5.475 9.95 6.15ZM11.35 20.7Q11.05 20.7 10.725 20.6Q10.4 20.5 10.175 20.3L6.15 16.625Q5.975 16.45 5.963 16.275Q5.95 16.1 6.025 15.975Q6.125 15.85 6.25 15.8Q6.375 15.75 6.55 15.8L10.65 16.6V6.15Q10.65 5.8 10.9 5.55Q11.15 5.3 11.5 5.3Q11.85 5.3 12.1 5.55Q12.35 5.8 12.35 6.15V12.15H13.4Q13.625 12.15 13.887 12.2Q14.15 12.25 14.375 12.375L17.2 13.75Q17.925 14.1 18.038 14.712Q18.15 15.325 18 16.15L17.35 19.85Q17.275 20.275 16.963 20.487Q16.65 20.7 16.225 20.7Z"/>
    </Icon>
  );
});

IconMaterialTouchAppRoundedW100Filled.displayName = 'AmauiIconMaterialTouchAppRoundedW100Filled';

export default IconMaterialTouchAppRoundedW100Filled;
