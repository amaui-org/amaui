import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSmallFilled'

      short_name='CloseSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M335.281-279 279-335l144.722-145.003L279-624l56.281-56 144.722 144.613L623.719-680 680-624 535.278-480.003 680-335l-56.281 56-143.716-144.613L335.281-279Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallFilled.displayName = 'AmauiIconMaterialCloseSmallFilled';

export default IconMaterialCloseSmallFilled;
