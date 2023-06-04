import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosW100Filled'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 21.1-.85-.85L15.4 12 7.15 3.75 8 2.9l9.1 9.1Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosW100Filled.displayName = 'AmauiIconMaterialArrowForwardIosW100Filled';

export default IconMaterialArrowForwardIosW100Filled;
