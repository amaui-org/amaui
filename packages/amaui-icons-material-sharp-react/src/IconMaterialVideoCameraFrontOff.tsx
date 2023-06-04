import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOff'

      short_name='VideoCameraFrontOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 17.5-4-4v1.675l-2-2V6H8.825l-2-2H18v6.5l4-4Zm-1.45 5.85L.65 3.45l1.4-1.4 19.9 19.9ZM12.425 9.575ZM9.6 12.4ZM4 4l2 2H4v12h12v-2l2 2v2H2V4Zm2 12v-.55q0-1.1 1.1-1.775Q8.2 13 10 13q1.8 0 2.9.675 1.1.675 1.1 1.775V16Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOff.displayName = 'AmauiIconMaterialVideoCameraFrontOff';

export default IconMaterialVideoCameraFrontOff;
