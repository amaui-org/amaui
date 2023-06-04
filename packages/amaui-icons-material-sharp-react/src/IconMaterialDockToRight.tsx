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
      <path d="M200 856h120V296H200v560Zm200 0h360V296H400v560Zm-80 0H200h120Zm-200 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToRight.displayName = 'AmauiIconMaterialDockToRight';

export default IconMaterialDockToRight;
