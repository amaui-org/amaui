import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarW100Filled'

      short_name='SpaceBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 13.7V9H6v4h12V9h.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarW100Filled.displayName = 'AmauiIconMaterialSpaceBarW100Filled';

export default IconMaterialSpaceBarW100Filled;
