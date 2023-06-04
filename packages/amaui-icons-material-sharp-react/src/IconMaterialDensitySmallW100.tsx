import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensitySmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensitySmallW100'

      short_name='DensitySmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 21.35v-.7h16.7v.7Zm0-6v-.7h16.7v.7Zm0-6v-.7h16.7v.7Zm0-6v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDensitySmallW100.displayName = 'AmauiIconMaterialDensitySmallW100';

export default IconMaterialDensitySmallW100;
