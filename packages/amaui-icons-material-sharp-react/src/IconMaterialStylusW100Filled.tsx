import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusW100Filled'

      short_name='Stylus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m323-199-157 33 33-157 124 124Zm20-19L218-343l457-456 124 124-456 457Z"/>
    </Icon>
  );
});

IconMaterialStylusW100Filled.displayName = 'AmauiIconMaterialStylusW100Filled';

export default IconMaterialStylusW100Filled;
