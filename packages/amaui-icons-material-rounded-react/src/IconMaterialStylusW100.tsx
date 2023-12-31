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
      <path d="M211-176q-16 3-27-8t-8-27l23-112 124 124-112 23Zm112-23L199-323l434-434q17-17 42-17t42 17l40 40q17 17 17 42t-17 42L323-199Zm330-538L252-337l85 85 400-401q9-9 9-22.5t-9-22.5l-39-39q-9-9-22.5-9t-22.5 9Z"/>
    </Icon>
  );
});

IconMaterialStylusW100.displayName = 'AmauiIconMaterialStylusW100';

export default IconMaterialStylusW100;
