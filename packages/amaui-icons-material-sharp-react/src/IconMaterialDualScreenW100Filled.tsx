import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDualScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100Filled'

      short_name='DualScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M212 819V228l296 118v592L212 819Zm376-15V292l-161-64h321v576H588Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100Filled.displayName = 'AmauiIconMaterialDualScreenW100Filled';

export default IconMaterialDualScreenW100Filled;
