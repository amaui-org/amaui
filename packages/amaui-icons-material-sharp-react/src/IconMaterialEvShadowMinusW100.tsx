import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvShadowMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowMinusW100'

      short_name='EvShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 6-.5 11.5T827-458q-15-12-31.5-21T760-494l35-40q-5-29-15-57t-25-53L405-294q19 26 41.5 47t49.5 38q8 20 20.5 38t27.5 33q-16 3-31.5 4.5T480-132Zm-90-186 349-350q-16-22-34.5-40.5T664-742L349-427q5 29 15.5 56.5T390-318Zm-45-145 294-294q-15-9-31-16.5T575-786q-107 32-171.5 121.5T345-463Zm-185-17q0 134 93 227t227 93q11 0 21.5-.5T523-163q-91-41-148.5-126T317-480q0-106 58-191t149-126q-11-2-22-2.5t-22-.5q-134 0-227 93t-93 227Zm400 204v-28h268v28H560ZM317-480Z"/>
    </Icon>
  );
});

IconMaterialEvShadowMinusW100.displayName = 'AmauiIconMaterialEvShadowMinusW100';

export default IconMaterialEvShadowMinusW100;
