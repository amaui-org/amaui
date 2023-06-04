import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpW100Filled'

      short_name='ArrowDropUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 13.35 12 9.9l3.45 3.45Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpW100Filled.displayName = 'AmauiIconMaterialArrowDropUpW100Filled';

export default IconMaterialArrowDropUpW100Filled;
