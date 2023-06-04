import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaximizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeFilled'

      short_name='Maximize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialMaximizeFilled.displayName = 'AmauiIconMaterialMaximizeFilled';

export default IconMaterialMaximizeFilled;
