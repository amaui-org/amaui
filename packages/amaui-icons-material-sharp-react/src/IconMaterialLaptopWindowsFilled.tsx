import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsFilled'

      short_name='LaptopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 20v-2h4v-1H2V3h20v14h-2v1h4v2Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsFilled.displayName = 'AmauiIconMaterialLaptopWindowsFilled';

export default IconMaterialLaptopWindowsFilled;
