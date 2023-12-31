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
      <path d="M480-459 346.326-325q-5.064 5-10.163 4.5T326-326q-5-5-5-10.5t5-10.5l133-132.918-133-132.754q-5-5.065-5-10.664 0-5.6 5-10.664 5-5 10.5-5t10.5 5l133 134 132.672-134q5.065-5 10.164-5 5.1 0 10.164 5 5 5 5 10.5t-5 10.5L500-480l134 133.674q5 5.064 5 10.163T634-326q-5 5-10.5 5t-10.5-5L480-459Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallW100Filled.displayName = 'AmauiIconMaterialCloseSmallW100Filled';

export default IconMaterialCloseSmallW100Filled;
