import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryCharging60W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging60W100'

      short_name='BatteryCharging60'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 21.35q-.3 0-.5-.2t-.2-.5V5.35q0-.3.2-.5t.5-.2h2.05V3.9q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h2.05q.3 0 .5.2t.2.5v15.3q0 .3-.2.5t-.5.2Zm4.05-5.375 1.2-2.25q.125-.2-.012-.388-.138-.187-.363-.187h-.875V11.2q0-.325-.3-.388-.3-.062-.45.213l-1.2 2.25q-.125.2.013.387.137.188.362.188h.875v1.95q0 .325.3.388.3.062.45-.213Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging60W100.displayName = 'AmauiIconMaterialBatteryCharging60W100';

export default IconMaterialBatteryCharging60W100;
