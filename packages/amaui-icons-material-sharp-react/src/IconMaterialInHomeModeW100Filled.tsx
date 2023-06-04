import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInHomeModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeModeW100Filled'

      short_name='InHomeMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 18.7V9.05H4.2L12 2.675l7.825 6.375H18.7v1.3H18V8.475l-6-4.9-6 4.9V18h2v.7Zm8.9 1.45-3.275-3.275.475-.475 2.8 2.8 5.9-5.9.475.475Z"/>
    </Icon>
  );
});

IconMaterialInHomeModeW100Filled.displayName = 'AmauiIconMaterialInHomeModeW100Filled';

export default IconMaterialInHomeModeW100Filled;
