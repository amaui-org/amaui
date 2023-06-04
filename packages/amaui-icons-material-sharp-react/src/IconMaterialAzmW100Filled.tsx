import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmW100Filled'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m635 698 103-103V308H451L348 411h287v287ZM452 881l103-103V491H268L165 594h287v287Z"/>
    </Icon>
  );
});

IconMaterialAzmW100Filled.displayName = 'AmauiIconMaterialAzmW100Filled';

export default IconMaterialAzmW100Filled;
