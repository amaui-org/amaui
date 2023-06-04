import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMedium'

      short_name='DensityMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="18" x="3" y="3"/><rect height="2" width="18" x="3" y="19"/><rect height="2" width="18" x="3" y="11"/></g></g>
    </Icon>
  );
});

IconMaterialDensityMedium.displayName = 'AmauiIconMaterialDensityMedium';

export default IconMaterialDensityMedium;
