import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinimizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeW100Filled'

      short_name='Minimize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 20.35v-.7h10.7v.7Z"/>
    </Icon>
  );
});

IconMaterialMinimizeW100Filled.displayName = 'AmauiIconMaterialMinimizeW100Filled';

export default IconMaterialMinimizeW100Filled;
