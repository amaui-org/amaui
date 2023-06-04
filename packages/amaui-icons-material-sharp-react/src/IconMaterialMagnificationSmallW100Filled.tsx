import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationSmallW100Filled'

      short_name='MagnificationSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 10.35h2.7v-2.7h-2.7ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialMagnificationSmallW100Filled.displayName = 'AmauiIconMaterialMagnificationSmallW100Filled';

export default IconMaterialMagnificationSmallW100Filled;
