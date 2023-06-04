import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareW100Filled'

      short_name='ScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14.15h.7V10.5h3.65v1.1l1.45-1.45-1.45-1.45v1.1H9ZM3.3 17.3V4.9h17.4v12.4ZM2 19v-.7h20v.7Z"/>
    </Icon>
  );
});

IconMaterialScreenShareW100Filled.displayName = 'AmauiIconMaterialScreenShareW100Filled';

export default IconMaterialScreenShareW100Filled;
