import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffFilled'

      short_name='VideoCameraFrontOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 17.5-4-4v1.675L6.825 4H18v6.5l4-4Zm-1.45 5.85L.65 3.45l1.4-1.4 19.9 19.9ZM4 4l14 14v2H2V4Zm2 12h8v-.55q0-1.1-1.1-1.775Q11.8 13 10 13q-1.8 0-2.9.675Q6 14.35 6 15.45Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffFilled.displayName = 'AmauiIconMaterialVideoCameraFrontOffFilled';

export default IconMaterialVideoCameraFrontOffFilled;
