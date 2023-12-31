import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSmall'

      short_name='CloseSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
    </Icon>
  );
});

IconMaterialCloseSmall.displayName = 'AmauiIconMaterialCloseSmall';

export default IconMaterialCloseSmall;
