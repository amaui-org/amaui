import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeAppLogo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAppLogo'

      short_name='HomeAppLogo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-4h8v4Zm-5-4.75v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.288.262-.087.537-.087t.538.087Q12.8 3.7 13 3.9l2 1.775ZM4.5 21q-.625 0-1.062-.438Q3 20.125 3 19.5v-1.9l4-3.55V21ZM17 21v-8.2L12.725 9l3.025-2.675 4.75 4.225q.25.225.375.512.125.288.125.613V19.5q0 .625-.438 1.062Q20.125 21 19.5 21Z"/>
    </Icon>
  );
});

IconMaterialHomeAppLogo.displayName = 'AmauiIconMaterialHomeAppLogo';

export default IconMaterialHomeAppLogo;
