import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledSharpW100'
      short_name='NearMeDisabled'

      {...props}
    >
      <path d="M13.2 18.85 10.9 13.05 5.1 10.7 5.05 10.3 10.2 8.35 4.575 2.725 5.075 2.225 21.775 18.925 21.275 19.425 15.575 13.725 13.6 18.85ZM16.65 10.975 16.1 10.45 17.75 6.2 13.475 7.825 12.95 7.3 18.95 5ZM13.4 17.4 15.025 13.175 10.725 8.875 6.5 10.5 11.4 12.5ZM14.8 9.15ZM12.875 11.025Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledSharpW100.displayName = 'AmauiIconMaterialNearMeDisabledSharpW100';

export default IconMaterialNearMeDisabledSharpW100;
