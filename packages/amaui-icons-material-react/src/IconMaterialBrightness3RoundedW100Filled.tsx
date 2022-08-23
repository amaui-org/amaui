import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness3RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3RoundedW100Filled'
      short_name='Brightness3'

      {...props}
    >
      <path d="M17.95 12Q17.95 13.625 17.413 15.062Q16.875 16.5 15.925 17.637Q14.975 18.775 13.65 19.538Q12.325 20.3 10.775 20.575Q10.425 20.625 10.263 20.475Q10.1 20.325 10.1 20.125Q10.1 20 10.138 19.9Q10.175 19.8 10.275 19.725Q12.075 18.3 12.925 16.325Q13.775 14.35 13.775 12Q13.775 9.65 12.925 7.675Q12.075 5.7 10.275 4.275Q10.175 4.2 10.138 4.1Q10.1 4 10.1 3.875Q10.1 3.675 10.263 3.525Q10.425 3.375 10.775 3.425Q12.325 3.675 13.65 4.45Q14.975 5.225 15.925 6.362Q16.875 7.5 17.413 8.938Q17.95 10.375 17.95 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness3RoundedW100Filled.displayName = 'AmauiIconMaterialBrightness3RoundedW100Filled';

export default IconMaterialBrightness3RoundedW100Filled;
