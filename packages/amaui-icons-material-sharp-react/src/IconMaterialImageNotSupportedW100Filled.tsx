import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedW100Filled'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 21-1.3-1.3H4.3V5.3L3 4l.5-.5 17 17ZM7.3 16.35h8.05l-2.625-2.6L11.5 15.4l-1.85-2.15Zm12.4.525L7.125 4.3H19.7Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedW100Filled.displayName = 'AmauiIconMaterialImageNotSupportedW100Filled';

export default IconMaterialImageNotSupportedW100Filled;
