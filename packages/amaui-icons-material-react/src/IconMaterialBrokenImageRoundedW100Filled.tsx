import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageRoundedW100Filled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M4.3 11.8V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V11.2L18.525 10.025Q18.4 9.9 18.275 9.85Q18.15 9.8 18 9.8Q17.85 9.8 17.725 9.85Q17.6 9.9 17.475 10.025L14 13.5L10.525 10.025Q10.4 9.9 10.275 9.85Q10.15 9.8 10 9.8Q9.85 9.8 9.725 9.85Q9.6 9.9 9.475 10.025L6 13.5ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V12.8L5.475 13.975Q5.6 14.1 5.725 14.15Q5.85 14.2 6 14.2Q6.15 14.2 6.275 14.15Q6.4 14.1 6.525 13.975L10 10.5L13.475 13.975Q13.6 14.1 13.725 14.15Q13.85 14.2 14 14.2Q14.15 14.2 14.275 14.15Q14.4 14.1 14.525 13.975L18 10.5L19.7 12.2V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageRoundedW100Filled.displayName = 'AmauiIconMaterialBrokenImageRoundedW100Filled';

export default IconMaterialBrokenImageRoundedW100Filled;
