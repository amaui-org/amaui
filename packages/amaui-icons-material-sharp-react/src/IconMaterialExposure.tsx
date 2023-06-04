import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposure = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Exposure'

      short_name='Exposure'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18ZM6 8.5h5V7H6ZM5 19h14V5Zm9.5-1v-2h-2v-1.5h2v-2H16v2h2V16h-2v2Z"/>
    </Icon>
  );
});

IconMaterialExposure.displayName = 'AmauiIconMaterialExposure';

export default IconMaterialExposure;
