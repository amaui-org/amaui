import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledRoundedW100Filled'
      short_name='NearMeDisabled'

      {...props}
    >
      <path d="M10.9 13.05 5.925 11.025Q5.725 10.95 5.65 10.812Q5.575 10.675 5.575 10.5Q5.575 10.325 5.65 10.188Q5.725 10.05 5.925 9.975L10.2 8.35L4.825 2.975Q4.725 2.875 4.713 2.737Q4.7 2.6 4.825 2.475Q4.95 2.35 5.075 2.35Q5.2 2.35 5.325 2.475L21.525 18.675Q21.625 18.775 21.638 18.913Q21.65 19.05 21.525 19.175Q21.4 19.3 21.275 19.3Q21.15 19.3 21.025 19.175L15.575 13.725L13.925 18Q13.85 18.2 13.713 18.275Q13.575 18.35 13.4 18.35Q13.225 18.35 13.075 18.275Q12.925 18.2 12.85 18ZM16.65 10.975 12.95 7.3 17.75 5.45Q17.925 5.375 18.075 5.425Q18.225 5.475 18.35 5.6Q18.475 5.725 18.513 5.875Q18.55 6.025 18.475 6.2Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledRoundedW100Filled.displayName = 'AmauiIconMaterialNearMeDisabledRoundedW100Filled';

export default IconMaterialNearMeDisabledRoundedW100Filled;
