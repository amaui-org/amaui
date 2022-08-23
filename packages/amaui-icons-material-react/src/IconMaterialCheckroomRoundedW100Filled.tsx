import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckroomRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomRoundedW100Filled'
      short_name='Checkroom'

      {...props}
    >
      <path d="M3 19.35Q2.75 19.35 2.675 19.113Q2.6 18.875 2.8 18.725L11.65 12.075V10Q11.65 9.875 11.738 9.762Q11.825 9.65 11.975 9.65Q12.9 9.675 13.525 9.05Q14.15 8.425 14.15 7.5Q14.15 6.625 13.525 5.987Q12.9 5.35 12.025 5.35Q11.375 5.35 10.825 5.712Q10.275 6.075 10.025 6.675Q9.975 6.775 9.9 6.812Q9.825 6.85 9.725 6.85Q9.525 6.85 9.438 6.7Q9.35 6.55 9.425 6.35Q9.775 5.575 10.463 5.112Q11.15 4.65 12 4.65Q13.2 4.65 14.025 5.462Q14.85 6.275 14.85 7.45Q14.85 8.7 14.15 9.45Q13.45 10.2 12.35 10.325V12.075L21.2 18.725Q21.4 18.875 21.325 19.113Q21.25 19.35 21 19.35ZM4.05 18.65H19.95L12 12.675Z"/>
    </Icon>
  );
});

IconMaterialCheckroomRoundedW100Filled.displayName = 'AmauiIconMaterialCheckroomRoundedW100Filled';

export default IconMaterialCheckroomRoundedW100Filled;
