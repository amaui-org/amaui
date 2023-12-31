import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSmallW100Filled'

      short_name='CloseSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336.281-315 315-336l143.722-144.003L315-623l21.281-21 143.722 143.613L622.719-644 644-623 500.278-480.003 644-336l-21.281 21-142.716-143.613L336.281-315Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallW100Filled.displayName = 'AmauiIconMaterialCloseSmallW100Filled';

export default IconMaterialCloseSmallW100Filled;
