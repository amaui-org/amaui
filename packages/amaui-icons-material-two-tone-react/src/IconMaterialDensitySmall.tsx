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
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="18" x="3" y="2"/><rect height="2" width="18" x="3" y="20"/><rect height="2" width="18" x="3" y="14"/><rect height="2" width="18" x="3" y="8"/></g></g>
    </Icon>
  );
});

IconMaterialDensitySmall.displayName = 'AmauiIconMaterialDensitySmall';

export default IconMaterialDensitySmall;
