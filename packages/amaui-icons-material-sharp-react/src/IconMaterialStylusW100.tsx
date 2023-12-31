import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusW100'

      short_name='Stylus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m323-199-157 33 33-157 124 124Zm0 0L199-323l476-476 124 124-476 476Zm14-53 423-423-85-85-423 423 85 85Z"/>
    </Icon>
  );
});

IconMaterialStylusW100.displayName = 'AmauiIconMaterialStylusW100';

export default IconMaterialStylusW100;
