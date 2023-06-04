import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize5Filled'

      short_name='PenSize5'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M235 821q-35-35-35-85t35-85l320-320q35-35 85-35t85 35q35 35 35 85t-35 85L405 821q-35 35-85 35t-85-35Z"/>
    </Icon>
  );
});

IconMaterialPenSize5Filled.displayName = 'AmauiIconMaterialPenSize5Filled';

export default IconMaterialPenSize5Filled;
