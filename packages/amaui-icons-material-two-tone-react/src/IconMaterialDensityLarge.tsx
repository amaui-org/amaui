import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityLarge'

      short_name='DensityLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="18" x="3" y="3"/><rect height="2" width="18" x="3" y="19"/></g></g>
    </Icon>
  );
});

IconMaterialDensityLarge.displayName = 'AmauiIconMaterialDensityLarge';

export default IconMaterialDensityLarge;
