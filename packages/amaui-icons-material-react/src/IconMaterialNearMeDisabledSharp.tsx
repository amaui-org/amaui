import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledSharp'
      short_name='NearMeDisabled'

      {...props}
    >
      <path d="M12.9 21 10.05 13.95 3 11.1V9.7L7.875 7.875L2.8 2.8L4.225 1.375L22.625 19.775L21.2 21.2L16.125 16.125L14.3 21ZM17.675 11.975 16.1 10.4 17.6 6.4 13.6 7.9 12.025 6.325 21 3ZM13.55 17.3 14.575 14.575 9.425 9.425 6.7 10.45 11.6 12.4ZM14.85 9.15ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledSharp.displayName = 'AmauiIconMaterialNearMeDisabledSharp';

export default IconMaterialNearMeDisabledSharp;
