import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPointScanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointScanW100'

      short_name='PointScan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 630q-23 0-38.5-15.5T426 576q0-23 15.5-38.5T480 522q23 0 38.5 15.5T534 576q0 23-15.5 38.5T480 630Zm-14-214V268h28v148h-28Zm0 468V736h28v148h-28Zm174-294v-28h148v28H640Zm-468 0v-28h148v28H172Z"/>
    </Icon>
  );
});

IconMaterialPointScanW100.displayName = 'AmauiIconMaterialPointScanW100';

export default IconMaterialPointScanW100;
