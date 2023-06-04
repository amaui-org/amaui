import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureW100Filled'

      short_name='Exposure'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM6.4 8.1h4.2v-.7H6.4ZM5 19h14V5Zm9.9-1.4v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialExposureW100Filled.displayName = 'AmauiIconMaterialExposureW100Filled';

export default IconMaterialExposureW100Filled;
