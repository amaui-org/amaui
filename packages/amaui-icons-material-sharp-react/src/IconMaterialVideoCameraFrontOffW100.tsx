import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100'

      short_name='VideoCameraFrontOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.15 15.25 17.4 12.5v2.25l-.7-.7V6H8.65l-.7-.7h9.45v6.2l2.75-2.75Zm-1.1 5L2.95 4.15l.5-.5 16.1 16.1Zm-6.375-10.225ZM10.75 11.95Zm-5.6-6.6L5.8 6H4.7v12h12v-1.1l.65.65v1.15H4V5.35Zm2.375 9.75v-.05q0-.7.888-1.175.887-.475 2.212-.475 1.325 0 2.213.475.887.475.887 1.175v.05Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100.displayName = 'AmauiIconMaterialVideoCameraFrontOffW100';

export default IconMaterialVideoCameraFrontOffW100;
