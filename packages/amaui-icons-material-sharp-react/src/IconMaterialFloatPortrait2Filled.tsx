import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortrait2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait2Filled'

      short_name='FloatPortrait2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-520h240v-200H320v200ZM800-80H160v-800h640v800Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait2Filled.displayName = 'AmauiIconMaterialFloatPortrait2Filled';

export default IconMaterialFloatPortrait2Filled;
