import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRouteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouteFilled'

      short_name='Route'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V8.825Q4.125 8.5 3.562 7.737 3 6.975 3 6q0-1.25.875-2.125T6 3q1.25 0 2.125.875T9 6q0 .975-.562 1.737Q7.875 8.5 7 8.825V19h4V3h8v12.175q.875.325 1.438 1.087Q21 17.025 21 18q0 1.25-.875 2.125T18 21q-1.25 0-2.125-.875T15 18q0-.975.562-1.75.563-.775 1.438-1.075V5h-4v16Z"/>
    </Icon>
  );
});

IconMaterialRouteFilled.displayName = 'AmauiIconMaterialRouteFilled';

export default IconMaterialRouteFilled;
