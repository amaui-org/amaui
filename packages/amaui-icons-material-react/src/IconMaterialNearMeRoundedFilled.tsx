import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeRoundedFilled'
      short_name='NearMe'

      {...props}
    >
      <path d="M10.05 13.95 3.65 11.35Q3.375 11.225 3.188 10.975Q3 10.725 3 10.4Q3 10.075 3.175 9.825Q3.35 9.575 3.65 9.45L18.95 3.775Q19.25 3.65 19.525 3.725Q19.8 3.8 20 4Q20.2 4.2 20.275 4.475Q20.35 4.75 20.225 5.05L14.55 20.35Q14.425 20.675 14.163 20.837Q13.9 21 13.625 21Q13.35 21 13.075 20.837Q12.8 20.675 12.65 20.35Z"/>
    </Icon>
  );
});

IconMaterialNearMeRoundedFilled.displayName = 'AmauiIconMaterialNearMeRoundedFilled';

export default IconMaterialNearMeRoundedFilled;
