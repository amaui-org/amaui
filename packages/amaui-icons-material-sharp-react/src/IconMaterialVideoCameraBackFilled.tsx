import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackFilled'

      short_name='VideoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h16v6.5l4-4v11l-4-4V20Zm3-4h10l-3.45-4.5-2.3 3-1.55-2Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackFilled.displayName = 'AmauiIconMaterialVideoCameraBackFilled';

export default IconMaterialVideoCameraBackFilled;
