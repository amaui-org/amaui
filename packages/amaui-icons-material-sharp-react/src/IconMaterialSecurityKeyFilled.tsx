import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityKeyFilled'

      short_name='SecurityKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-40v-200h-80v-680h480v680h-80v200H320Zm160-420q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-80 340h160v-120H400v120Zm80-420q-17 0-28.5-11.5T440-580q0-17 11.5-28.5T480-620q17 0 28.5 11.5T520-580q0 17-11.5 28.5T480-540Z"/>
    </Icon>
  );
});

IconMaterialSecurityKeyFilled.displayName = 'AmauiIconMaterialSecurityKeyFilled';

export default IconMaterialSecurityKeyFilled;
