import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckbookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckbookW100'

      short_name='Checkbook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-386h347l28-28H266v28Zm0-160h188v-28H266v28ZM160-680v400h347l-28 28H132v-456h696v135h-28v-107H160Zm686 194q4 4 4 9t-4 9l-30 30-20-20 30-30q4-4 9-4t9 4l2 2ZM536-176v-20l238-238 20 20-238 238h-20ZM160-680v400-400Z"/>
    </Icon>
  );
});

IconMaterialCheckbookW100.displayName = 'AmauiIconMaterialCheckbookW100';

export default IconMaterialCheckbookW100;
