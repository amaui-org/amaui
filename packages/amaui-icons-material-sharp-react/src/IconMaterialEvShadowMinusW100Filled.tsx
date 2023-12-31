import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvShadowMinusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowMinusW100Filled'

      short_name='EvShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-276v-28h268v28H560Zm-80 144q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 6-.5 11.5T827-458q-15-12-31.5-21T760-494l35-40q-5-29-15-57t-25-53L405-294q19 26 41.5 47t49.5 38q8 20 20.5 38t27.5 33q-16 3-31.5 4.5T480-132Zm-90-186 349-350q-16-22-34.5-40.5T664-742L349-427q5 29 15.5 56.5T390-318Zm-45-145 294-294q-15-9-31-16.5T575-786q-107 32-171.5 121.5T345-463Z"/>
    </Icon>
  );
});

IconMaterialEvShadowMinusW100Filled.displayName = 'AmauiIconMaterialEvShadowMinusW100Filled';

export default IconMaterialEvShadowMinusW100Filled;
