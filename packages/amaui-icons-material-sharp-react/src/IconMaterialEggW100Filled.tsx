import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEggW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EggW100Filled'

      short_name='Egg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.375 19.725q-2.4 0-4.063-1.725-1.662-1.725-1.662-4.175 0-1.625.525-3.313.525-1.687 1.362-3.074.838-1.388 1.85-2.276 1.013-.887 1.988-.887.975 0 1.988.875 1.012.875 1.85 2.262.837 1.388 1.362 3.088.525 1.7.525 3.325 0 2.45-1.662 4.175-1.663 1.725-4.063 1.725Zm1.025-3h.35v-.7h-.35q-1.525 0-2.588-1.063Q8.75 13.9 8.75 12.375v-.35h-.7v.35q0 1.8 1.275 3.075 1.275 1.275 3.075 1.275Z"/>
    </Icon>
  );
});

IconMaterialEggW100Filled.displayName = 'AmauiIconMaterialEggW100Filled';

export default IconMaterialEggW100Filled;
