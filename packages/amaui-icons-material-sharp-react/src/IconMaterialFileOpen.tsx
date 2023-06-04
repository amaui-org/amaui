import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpen'

      short_name='FileOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v6h-2V9h-5V4H6v16h9v2Zm17.95.375L19 19.425v2.225h-2V16h5.65v2H20.4l2.95 2.95ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialFileOpen.displayName = 'AmauiIconMaterialFileOpen';

export default IconMaterialFileOpen;
