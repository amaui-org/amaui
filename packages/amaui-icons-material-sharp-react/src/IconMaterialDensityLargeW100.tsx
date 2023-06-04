import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityLargeW100'

      short_name='DensityLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-16v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDensityLargeW100.displayName = 'AmauiIconMaterialDensityLargeW100';

export default IconMaterialDensityLargeW100;
