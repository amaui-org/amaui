import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberPin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPin'

      short_name='FiberPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 15h1.25v-3.5L17.8 15H19V9h-1.25v3.5L15.25 9H14Zm-2.75 0h1.5V9h-1.5ZM5 15h1.5v-2H10V9H5Zm1.5-3.5v-1h2v1ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialFiberPin.displayName = 'AmauiIconMaterialFiberPin';

export default IconMaterialFiberPin;
