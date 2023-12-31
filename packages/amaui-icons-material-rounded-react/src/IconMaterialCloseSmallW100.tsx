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
      <path d="M480-459 328-307q-5 5-10 4.5t-10-5.5q-5-5-5-10.5t5-10.5l151-151-152-151q-5-5-4.5-10.5T308-652q5-5 10.5-5t10.5 5l151 152 151-152q5-5 10-5t10 5q5 5 5 10.5t-5 10.5L500-480l152 152q5 5 5 10t-5 10q-5 5-10.5 5t-10.5-5L480-459Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallW100.displayName = 'AmauiIconMaterialCloseSmallW100';

export default IconMaterialCloseSmallW100;
