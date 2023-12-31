import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerAddW100Filled'

      short_name='ThermometerAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M676-546v-120H556v-28h120v-120h28v120h120v28H704v120h-28ZM359.703-172q-61.297 0-104.5-43T212-320q0-42 22-76.5t58-55.5v-268q0-29 19.5-48.5T360-788q29 0 48.5 19.5T428-720v268q36 21 57.5 55.5T508-320q-1 62-44 105t-104.297 43ZM320-560h80v-160q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerAddW100Filled.displayName = 'AmauiIconMaterialThermometerAddW100Filled';

export default IconMaterialThermometerAddW100Filled;
