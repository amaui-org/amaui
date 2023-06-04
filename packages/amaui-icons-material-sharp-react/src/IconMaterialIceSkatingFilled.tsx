import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIceSkatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingFilled'

      short_name='IceSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-2h4v-2H3V3h8v3H8.5q-.2 0-.35.15Q8 6.3 8 6.5q0 .2.15.35.15.15.35.15H11v.5q0 .2.05.5H8.5q-.2 0-.35.15Q8 8.3 8 8.5q0 .2.15.35.15.15.35.15h2.9q.325.575.863.975.537.4 1.212.6L19 12.1V18h-3v2h2q1.25 0 2.125-.875T21 17h2q0 2.075-1.462 3.538Q20.075 22 18 22Zm6-2h6v-2H8Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingFilled.displayName = 'AmauiIconMaterialIceSkatingFilled';

export default IconMaterialIceSkatingFilled;
