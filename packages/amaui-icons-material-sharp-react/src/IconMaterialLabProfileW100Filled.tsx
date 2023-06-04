import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileW100Filled'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 11.35h6.7v-.7h-6.7Zm0-4h6.7v-.7h-6.7ZM18.7 19.925l-4.05-5.275H5.3V3.3h13.4ZM5.3 20.7v-5.35h9.025l4.1 5.35Z"/>
    </Icon>
  );
});

IconMaterialLabProfileW100Filled.displayName = 'AmauiIconMaterialLabProfileW100Filled';

export default IconMaterialLabProfileW100Filled;
