import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightMode'

      short_name='LightMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM1 13v-2h4v2Zm18 0v-2h4v2Zm-8-8V1h2v4Zm0 18v-4h2v4ZM6.35 7.75 3.875 5.275l1.4-1.4L7.75 6.35Zm12.375 12.375L16.25 17.65l1.4-1.4 2.475 2.475ZM17.65 7.75l-1.4-1.4 2.475-2.475 1.4 1.4ZM5.275 20.125l-1.4-1.4L6.35 16.25l1.4 1.4ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialLightMode.displayName = 'AmauiIconMaterialLightMode';

export default IconMaterialLightMode;
