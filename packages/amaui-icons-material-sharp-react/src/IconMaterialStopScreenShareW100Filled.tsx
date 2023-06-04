import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100Filled'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.15 17.3-6.225-6.225.875-.925-1.45-1.45v1.1h-.7l-4.9-4.9H20.7v12.4Zm1.25 5.1L18 19H2v-.7h15.3l-1-1h-13V4.9h.6L1.6 2.6l.5-.5 19.8 19.8ZM9 14.15h.7V10.7L9 10Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100Filled.displayName = 'AmauiIconMaterialStopScreenShareW100Filled';

export default IconMaterialStopScreenShareW100Filled;
