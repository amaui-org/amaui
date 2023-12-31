import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerMinusW100'

      short_name='ThermometerMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M570-666q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h240q5.95 0 9.975 4.035 4.025 4.035 4.025 10T819.975-670q-4.025 4-9.975 4H570ZM359.703-172q-61.297 0-104.5-43T212-320q0-42 22-76.5t58-55.5v-268q0-29 19.5-48.5T360-788q29 0 48.5 19.5T428-720v268q36 21 57.5 55.5T508-320q-1 62-44 105t-104.297 43ZM240-320h240q0-29-12.5-54T432-416l-32-24v-280q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v280l-32 24q-23 17-35.5 42T240-320Z"/>
    </Icon>
  );
});

IconMaterialThermometerMinusW100.displayName = 'AmauiIconMaterialThermometerMinusW100';

export default IconMaterialThermometerMinusW100;
