import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinimizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeFilled'

      short_name='Minimize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-2h12v2Z"/>
    </Icon>
  );
});

IconMaterialMinimizeFilled.displayName = 'AmauiIconMaterialMinimizeFilled';

export default IconMaterialMinimizeFilled;
