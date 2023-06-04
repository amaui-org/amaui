import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeftFilled'

      short_name='DockToLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm360-80V296H200v560h360Z"/>
    </Icon>
  );
});

IconMaterialDockToLeftFilled.displayName = 'AmauiIconMaterialDockToLeftFilled';

export default IconMaterialDockToLeftFilled;
