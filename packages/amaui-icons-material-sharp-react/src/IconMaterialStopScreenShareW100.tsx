import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.9 11.05 12.65 9.8h.7V8.7l1.45 1.45Zm6.25 6.25-.75-.75h.6V5.6H8.45l-.7-.7H20.7v12.4Zm1.25 5.1L18 19H2v-.7h15.3l-1-1h-13V4.9h.6L1.6 2.6l.5-.5 19.8 19.8ZM9.7 10.7v3.45H9V10L4.6 5.6H4v11h11.6Zm2.3.4Zm-1.9 0Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100.displayName = 'AmauiIconMaterialStopScreenShareW100';

export default IconMaterialStopScreenShareW100;
