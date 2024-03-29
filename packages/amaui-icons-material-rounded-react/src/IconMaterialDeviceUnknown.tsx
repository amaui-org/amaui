import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceUnknown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknown'

      short_name='DeviceUnknown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-.45 0-.75-.3t-.3-.75q0-.45.3-.75t.75-.3q.45 0 .75.3t.3.75q0 .45-.3.75T12 17Zm0-3.2q-.325 0-.537-.225-.213-.225-.188-.525.05-.65.287-1.025.238-.375.938-.975.35-.35.6-.688.25-.337.25-.762 0-.45-.337-.8-.338-.35-1.013-.35-.425 0-.712.162-.288.163-.488.413-.2.275-.45.362-.25.088-.5-.012-.3-.125-.412-.413-.113-.287.037-.537Q9.85 7.8 10.488 7.4 11.125 7 12 7q1.175 0 2.013.637.837.638.837 1.913 0 .6-.3 1.125t-.75.975q-.525.525-.738.788-.212.262-.262.612-.05.325-.275.537-.225.213-.525.213ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Zm0 2v1h10v-1ZM7 4h10V3H7Zm0-1v1-1Zm0 18v-1 1Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknown.displayName = 'AmauiIconMaterialDeviceUnknown';

export default IconMaterialDeviceUnknown;
