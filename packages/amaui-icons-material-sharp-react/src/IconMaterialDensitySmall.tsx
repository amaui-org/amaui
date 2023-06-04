import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensitySmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensitySmall'

      short_name='DensitySmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-2h18v2Zm0-6v-2h18v2Zm0-6V8h18v2Zm0-6V2h18v2Z"/>
    </Icon>
  );
});

IconMaterialDensitySmall.displayName = 'AmauiIconMaterialDensitySmall';

export default IconMaterialDensitySmall;
