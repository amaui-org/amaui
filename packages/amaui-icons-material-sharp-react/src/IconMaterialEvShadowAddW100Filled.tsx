import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvShadowAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowAddW100Filled'

      short_name='EvShadowAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-156v-120H560v-28h120v-120h28v120h120v28H708v120h-28Zm-200 24q-72.21 0-135.72-27.391-63.51-27.392-110.49-74.348-46.98-46.957-74.385-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.405 63.559 27.405 110.574 74.385 47.016 46.98 74.442 110.49Q828-552.21 828-480q0 5.93-.5 11.465T827-458q-15-12-31.5-21T760-494l35-40q-5-29-15-57t-25-53L405-294q19 26 41.5 47t49.5 38q8 20 20.5 38t27.5 33q-16 3-31.5 4.5T480-132Zm-90-186 349-350q-16-22-34.5-40.5T664-742L349-427q5 29 15.5 56.5T390-318Zm-45-145 294-294q-15-9-31-16.5T575-786q-107 32-171.5 121.5T345-463Z"/>
    </Icon>
  );
});

IconMaterialEvShadowAddW100Filled.displayName = 'AmauiIconMaterialEvShadowAddW100Filled';

export default IconMaterialEvShadowAddW100Filled;
