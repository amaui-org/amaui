import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoDisconnect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnect'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m127-833 73 73h-40v440h368L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-240h72l28 28q6 6 9 13.5t3 15.5v23q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-23q0-8 3-15.5t9-13.5l28-28H160q-33 0-56.5-23.5T80-320v-440q0-37 23.5-55l23.5-18Zm701 587-74-74h46v-440H314l-80-80h566q33 0 56.5 23.5T880-760v440q0 26-14.5 46T828-246ZM534-540Zm-190 36Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnect.displayName = 'AmauiIconMaterialMimoDisconnect';

export default IconMaterialMimoDisconnect;
