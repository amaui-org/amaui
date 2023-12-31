import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvSigninW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvSigninW100Filled'

      short_name='TvSignin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-396h248v-2q0-32-32.5-49T480-464q-59 0-91.5 17T356-398v2Zm124-140q23 0 38.5-15.5T534-590q0-23-15.5-38.5T480-644q-23 0-38.5 15.5T426-590q0 23 15.5 38.5T480-536ZM192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 13-8.5 21.5T558-172H402q-13 0-21.5-8.5T372-202v-50H192Z"/>
    </Icon>
  );
});

IconMaterialTvSigninW100Filled.displayName = 'AmauiIconMaterialTvSigninW100Filled';

export default IconMaterialTvSigninW100Filled;
