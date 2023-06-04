import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOtherHousesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesW100Filled'

      short_name='OtherHouses'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7v-9.075L3.325 12.15 2.9 11.6 12 4.625l9.1 6.975-.425.55-1.975-1.525V19.7Zm2.7-5q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q8.275 13.3 8 13.3t-.487.212Q7.3 13.725 7.3 14t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 13.3 12 13.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q16.275 13.3 16 13.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesW100Filled.displayName = 'AmauiIconMaterialOtherHousesW100Filled';

export default IconMaterialOtherHousesW100Filled;
