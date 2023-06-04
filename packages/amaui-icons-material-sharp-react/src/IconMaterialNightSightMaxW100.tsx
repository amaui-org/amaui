import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightMaxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxW100'

      short_name='NightSightMax'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M706 510V390H586v-28h120V242h28v120h120v28H734v120h-28ZM440 882q72 0 130-35t100-98q-143 3-233.5-80T346 456q0-23 3.5-46.5T361 361q-85 29-136 98t-51 157q0 110 78 188t188 78Zm0 28q-123.112 0-208.556-85.444Q146 739.112 146 616q0-112 74.5-196.5T409 324q-17 26-26 62t-9 70q0 110 78 188t188 78q20 0 39.5-3t38.5-9q-29 88-104.5 144T440 910Zm-3-242Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxW100.displayName = 'AmauiIconMaterialNightSightMaxW100';

export default IconMaterialNightSightMaxW100;
