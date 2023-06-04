import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceUnknownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownW100Filled'

      short_name='DeviceUnknown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.425q-.225 0-.387-.162-.163-.163-.163-.388t.163-.387q.162-.163.387-.163t.388.163q.162.162.162.387t-.162.388q-.163.162-.388.162Zm-.35-2.65q0-.6.25-1.113.25-.512.9-1.137.425-.4.688-.75.262-.35.262-.875 0-.575-.425-1.05Q12.9 8.375 12 8.375q-.725 0-1.1.325-.375.325-.6.775l-.65-.25q.3-.675.888-1.112.587-.438 1.462-.438 1.05 0 1.75.6t.7 1.625q0 .575-.237.987-.238.413-.663.838-.725.725-.937 1.1-.213.375-.263.95ZM6.3 21.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownW100Filled.displayName = 'AmauiIconMaterialDeviceUnknownW100Filled';

export default IconMaterialDeviceUnknownW100Filled;
