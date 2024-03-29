import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCachedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CachedFilled'

      short_name='Cached'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 20q-3.35 0-5.7-2.325T4 12v-.175l-1.6 1.6-1.4-1.4 4-4 4 4-1.4 1.4-1.6-1.6V12q0 2.5 1.763 4.25Q9.525 18 12.05 18q.65 0 1.275-.15.625-.15 1.225-.45l1.5 1.5q-.95.55-1.95.825-1 .275-2.05.275ZM19 15.975l-4-4 1.4-1.4 1.6 1.6V12q0-2.5-1.762-4.25Q14.475 6 11.95 6q-.65 0-1.275.15-.625.15-1.225.45l-1.5-1.5q.95-.55 1.95-.825Q10.9 4 11.95 4q3.35 0 5.7 2.325T20 12v.175l1.6-1.6 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialCachedFilled.displayName = 'AmauiIconMaterialCachedFilled';

export default IconMaterialCachedFilled;
