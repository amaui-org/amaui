import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureNeg1RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1RoundedW100'
      short_name='ExposureNeg1'

      {...props}
    >
      <path d="M4 13.2Q3.85 13.2 3.75 13.1Q3.65 13 3.65 12.85Q3.65 12.7 3.75 12.6Q3.85 12.5 4 12.5H9Q9.15 12.5 9.25 12.6Q9.35 12.7 9.35 12.85Q9.35 13 9.25 13.1Q9.15 13.2 9 13.2ZM16.85 17.65Q16.7 17.65 16.6 17.55Q16.5 17.45 16.5 17.3V7.3L14.175 8.9Q14.05 8.975 13.925 8.962Q13.8 8.95 13.7 8.825Q13.625 8.7 13.637 8.562Q13.65 8.425 13.775 8.35L16.35 6.55Q16.475 6.45 16.663 6.462Q16.85 6.475 16.975 6.55Q17.075 6.6 17.137 6.725Q17.2 6.85 17.2 6.975V17.3Q17.2 17.45 17.1 17.55Q17 17.65 16.85 17.65Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1RoundedW100.displayName = 'AmauiIconMaterialExposureNeg1RoundedW100';

export default IconMaterialExposureNeg1RoundedW100;
