import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkManagerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerW100Filled'

      short_name='BookmarkManager'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m757 711 40 40-156 156q-8 8-19.5 12.5T598 924q-6 0-10.5-4.5T583 909q0-12 5-23.5t13-19.5l156-155Zm59 20-39-40 32-32q9-9 21-9.5t20 7.5q8 8 7.5 20.5T848 699l-32 32ZM192 844q-25 0-42.5-17.5T132 784V408q0-25 17.5-42.5T192 348h223q12 0 23.5 5t19.5 13l22 22h288q25 0 42.5 17.5T828 448v102q-26 0-49 10t-41 28L481 844H192Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerW100Filled.displayName = 'AmauiIconMaterialBookmarkManagerW100Filled';

export default IconMaterialBookmarkManagerW100Filled;
