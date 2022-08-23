import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightRoundedW100Filled'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14.65 20.7Q12.85 20.7 11.263 20.012Q9.675 19.325 8.5 18.15Q7.325 16.975 6.638 15.387Q5.95 13.8 5.95 12Q5.95 10.2 6.638 8.612Q7.325 7.025 8.5 5.85Q9.675 4.675 11.263 3.987Q12.85 3.3 14.65 3.3Q15.1 3.3 15.525 3.337Q15.95 3.375 16.375 3.475Q16.65 3.525 16.7 3.725Q16.75 3.925 16.55 4.125Q15.075 5.65 14.213 7.675Q13.35 9.7 13.35 12Q13.35 14.3 14.213 16.325Q15.075 18.35 16.55 19.875Q16.75 20.075 16.7 20.275Q16.65 20.475 16.375 20.525Q15.95 20.625 15.525 20.663Q15.1 20.7 14.65 20.7Z"/>
    </Icon>
  );
});

IconMaterialNightlightRoundedW100Filled.displayName = 'AmauiIconMaterialNightlightRoundedW100Filled';

export default IconMaterialNightlightRoundedW100Filled;
