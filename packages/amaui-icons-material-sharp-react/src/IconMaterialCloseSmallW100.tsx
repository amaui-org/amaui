import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSmallW100'

      short_name='CloseSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m318-297-21-21 162-162-162-161 21-21 162 162 161-162 21 21-162 161 162 162-21 21-161-162-162 162Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallW100.displayName = 'AmauiIconMaterialCloseSmallW100';

export default IconMaterialCloseSmallW100;
