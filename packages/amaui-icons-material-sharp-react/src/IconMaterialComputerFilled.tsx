import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComputerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerFilled'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V3h20v15Zm-1 3v-2h22v2Z"/>
    </Icon>
  );
});

IconMaterialComputerFilled.displayName = 'AmauiIconMaterialComputerFilled';

export default IconMaterialComputerFilled;
