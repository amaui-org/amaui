import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryError'

      short_name='BatteryError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m740 893-56 55q-11 11-27.5 11.5T628 948q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T852 724q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T852 948q-11 11-28 11t-28-11l-56-55Zm-420 83q-17 0-28.5-11.5T280 936V296q0-17 11.5-28.5T320 256h80v-40q0-17 11.5-28.5T440 176h80q17 0 28.5 11.5T560 216v40h80q17 0 28.5 11.5T680 296v308q-22 6-42 15t-38 22V336H360v560h148q6 22 15 42t22 38H320Zm40-80h148-8 8-148Z"/>
    </Icon>
  );
});

IconMaterialBatteryError.displayName = 'AmauiIconMaterialBatteryError';

export default IconMaterialBatteryError;
