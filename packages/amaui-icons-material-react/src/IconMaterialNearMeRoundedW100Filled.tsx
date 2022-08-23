import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeRoundedW100Filled'
      short_name='NearMe'

      {...props}
    >
      <path d="M10.9 13.05 5.9 11.025Q5.7 10.95 5.625 10.812Q5.55 10.675 5.55 10.5Q5.55 10.325 5.638 10.175Q5.725 10.025 5.925 9.95L17.775 5.475Q17.95 5.4 18.1 5.437Q18.25 5.475 18.375 5.6Q18.5 5.725 18.538 5.875Q18.575 6.025 18.5 6.2L13.925 18Q13.85 18.2 13.713 18.288Q13.575 18.375 13.4 18.375Q13.225 18.375 13.088 18.288Q12.95 18.2 12.875 18Z"/>
    </Icon>
  );
});

IconMaterialNearMeRoundedW100Filled.displayName = 'AmauiIconMaterialNearMeRoundedW100Filled';

export default IconMaterialNearMeRoundedW100Filled;
