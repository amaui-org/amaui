import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvSigninW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvSigninW100'

      short_name='TvSignin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-396h248v-2q0-32-32.5-49T480-464q-59 0-91.5 17T356-398v2Zm124-140q23 0 38.5-15.5T534-590q0-23-15.5-38.5T480-644q-23 0-38.5 15.5T426-590q0 23 15.5 38.5T480-536ZM372-172v-80H132v-536h696v536H588v80H372ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTvSigninW100.displayName = 'AmauiIconMaterialTvSigninW100';

export default IconMaterialTvSigninW100;
