import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTwoPagerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoPagerW100Filled'

      short_name='TwoPager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm362-28h306v-480H494v480ZM220-346h186v-28H220v28Zm0-120h186v-28H220v28Zm0-120h186v-28H220v28Zm334 240h186v-28H554v28Zm0-120h186v-28H554v28Zm0-120h186v-28H554v28Z"/>
    </Icon>
  );
});

IconMaterialTwoPagerW100Filled.displayName = 'AmauiIconMaterialTwoPagerW100Filled';

export default IconMaterialTwoPagerW100Filled;
