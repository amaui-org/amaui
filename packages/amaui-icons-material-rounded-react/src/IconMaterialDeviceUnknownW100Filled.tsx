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
      <path d="M12 16.425q-.225 0-.387-.162-.163-.163-.163-.388t.163-.387q.162-.163.387-.163t.388.163q.162.162.162.387t-.162.388q-.163.162-.388.162Zm.025-2.65q-.15 0-.263-.113-.112-.112-.087-.262.05-.475.313-.913.262-.437.812-.962.425-.4.688-.75.262-.35.262-.875 0-.575-.425-1.05Q12.9 8.375 12 8.375q-.625 0-.988.25-.362.25-.587.6-.05.1-.163.15-.112.05-.237 0-.175-.05-.225-.213-.05-.162.05-.287.35-.525.875-.863.525-.337 1.275-.337 1.05 0 1.75.6t.7 1.625q0 .575-.237.987-.238.413-.663.838-.6.6-.85.95t-.325.775q-.025.125-.125.225t-.225.1ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownW100Filled.displayName = 'AmauiIconMaterialDeviceUnknownW100Filled';

export default IconMaterialDeviceUnknownW100Filled;
