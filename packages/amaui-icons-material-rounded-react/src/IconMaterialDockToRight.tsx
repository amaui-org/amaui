import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRight'

      short_name='DockToRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm120-80V296H200v560h120Zm80 0h360V296H400v560Zm-80 0H200h120Z"/>
    </Icon>
  );
});

IconMaterialDockToRight.displayName = 'AmauiIconMaterialDockToRight';

export default IconMaterialDockToRight;
