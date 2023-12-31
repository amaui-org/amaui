import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTwoPagerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoPagerW100'

      short_name='TwoPager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h306v-480H160v480Zm334 0h306v-480H494v480ZM220-346h186v-28H220v28Zm0-120h186v-28H220v28Zm0-120h186v-28H220v28Zm334 240h186v-28H554v28Zm0-120h186v-28H554v28Zm0-120h186v-28H554v28Zm-88 346v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTwoPagerW100.displayName = 'AmauiIconMaterialTwoPagerW100';

export default IconMaterialTwoPagerW100;
