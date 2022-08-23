import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledRounded'
      short_name='NearMeDisabled'

      {...props}
    >
      <path d="M10.05 13.95 3.575 11.325Q3.25 11.2 3.1 10.938Q2.95 10.675 2.95 10.4Q2.95 10.125 3.113 9.863Q3.275 9.6 3.6 9.475L7.875 7.875L3.5 3.5Q3.2 3.2 3.213 2.787Q3.225 2.375 3.525 2.075Q3.825 1.775 4.238 1.775Q4.65 1.775 4.95 2.075L21.925 19.075Q22.225 19.375 22.225 19.775Q22.225 20.175 21.925 20.475Q21.625 20.775 21.212 20.775Q20.8 20.775 20.5 20.475L16.125 16.125L14.525 20.4Q14.4 20.725 14.137 20.888Q13.875 21.05 13.6 21.05Q13.325 21.05 13.062 20.9Q12.8 20.75 12.675 20.425ZM17.675 11.975 16.1 10.4 17.6 6.4 13.6 7.9 12.025 6.325 18.95 3.75Q19.25 3.625 19.525 3.712Q19.8 3.8 20 4Q20.2 4.2 20.288 4.475Q20.375 4.75 20.25 5.05ZM13.55 17.3 14.575 14.575 9.425 9.425 6.7 10.45 11.6 12.4ZM14.85 9.15ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledRounded.displayName = 'AmauiIconMaterialNearMeDisabledRounded';

export default IconMaterialNearMeDisabledRounded;
