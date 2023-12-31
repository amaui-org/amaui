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
      <path d="M480-424 363.326-307q-11.064 11-28.163 11T307-307q-11-11-11-28t11-28l117-117-117-115.672q-11-11.065-11-28.164 0-17.1 11-28.164 11-11 28-11t28 11l117 117 115.672-117q11.065-11 28.164-11 17.1 0 28.164 11 12 12 12 28.5T652-596L535-480l117 116.674q11 11.064 11 28.163T652-307q-12 12-28.5 12T596-307L480-424Z"/>
    </Icon>
  );
});

IconMaterialCloseSmallFilled.displayName = 'AmauiIconMaterialCloseSmallFilled';

export default IconMaterialCloseSmallFilled;
