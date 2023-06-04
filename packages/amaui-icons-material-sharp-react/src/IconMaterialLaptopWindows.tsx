import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopWindows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindows'

      short_name='LaptopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 20v-2h4v-1H2V3h20v14h-2v1h4v2Zm4-5h16V5H4Zm0 0V5v10Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindows.displayName = 'AmauiIconMaterialLaptopWindows';

export default IconMaterialLaptopWindows;
