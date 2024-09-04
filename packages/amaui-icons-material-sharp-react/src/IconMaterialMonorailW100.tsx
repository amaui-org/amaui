import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonorailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonorailW100'

      short_name='Monorail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-271h28v111h182v28H285v-28h181v-111ZM332-828h296q50 0 85 35t35 85v363q0 44-31 74.5T643-240h-69v-111H386v111h-69q-44 0-74.5-30.5T212-345v-363q0-50 34.5-85t85.5-35Zm-92 324v159q0 32 22.5 54.5T317-268h41v-111h244v111h41q32 0 54.5-22.5T720-345v-159H240Zm0-188v160h480v-160H240Zm92-108q-35 0-60.5 23T241-720h478q-5-34-30.5-57T628-800H332Zm-92 296h480-480Zm92-216h387-478 91Z"/>
    </Icon>
  );
});

IconMaterialMonorailW100.displayName = 'AmauiIconMaterialMonorailW100';

export default IconMaterialMonorailW100;
