import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOtherHousesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesW100'

      short_name='OtherHouses'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7v-9.075L3.325 12.15 2.9 11.6 12 4.625l9.1 6.975-.425.55-1.975-1.525V19.7ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.3q-.275 0-.487-.213Q7.3 14.275 7.3 14t.213-.488Q7.725 13.3 8 13.3t.488.212q.212.213.212.488t-.212.487Q8.275 14.7 8 14.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesW100.displayName = 'AmauiIconMaterialOtherHousesW100';

export default IconMaterialOtherHousesW100;
