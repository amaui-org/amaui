import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextDecreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextDecreaseW100Filled'

      short_name='TextDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1.8 18.35 5.3-12.7h.5l5.3 12.7h-.85l-1.5-3.65h-6.5l-1.5 3.65Zm2.5-4.3h6l-2.9-7.1h-.15Zm11.2-1.7v-.7h6.7v.7Z"/>
    </Icon>
  );
});

IconMaterialTextDecreaseW100Filled.displayName = 'AmauiIconMaterialTextDecreaseW100Filled';

export default IconMaterialTextDecreaseW100Filled;
