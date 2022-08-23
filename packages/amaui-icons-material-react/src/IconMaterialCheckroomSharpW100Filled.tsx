import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckroomSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomSharpW100Filled'
      short_name='Checkroom'

      {...props}
    >
      <path d="M3 19.35Q2.75 19.35 2.675 19.113Q2.6 18.875 2.8 18.725L11.65 12.075V10Q11.65 9.875 11.738 9.762Q11.825 9.65 11.975 9.65Q12.9 9.675 13.525 9.05Q14.15 8.425 14.15 7.5Q14.15 6.625 13.512 5.987Q12.875 5.35 12 5.35Q11.125 5.35 10.488 5.987Q9.85 6.625 9.85 7.5H9.15Q9.15 6.3 9.975 5.475Q10.8 4.65 12 4.65Q13.2 4.65 14.025 5.462Q14.85 6.275 14.85 7.45Q14.85 8.7 14.15 9.45Q13.45 10.2 12.35 10.325V12.075L21.2 18.725Q21.4 18.875 21.325 19.113Q21.25 19.35 21 19.35ZM4.05 18.65H19.95L12 12.675Z"/>
    </Icon>
  );
});

IconMaterialCheckroomSharpW100Filled.displayName = 'AmauiIconMaterialCheckroomSharpW100Filled';

export default IconMaterialCheckroomSharpW100Filled;
