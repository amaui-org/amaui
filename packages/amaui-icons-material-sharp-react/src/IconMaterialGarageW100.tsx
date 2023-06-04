import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageW100'

      short_name='Garage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V3.3h17.4v17.4ZM4 20h16V4H4Zm4.5-6.3q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q8.775 12.3 8.5 12.3t-.488.212Q7.8 12.725 7.8 13t.212.487q.213.213.488.213Zm7 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-9.2 3.5H7v-2h10v2h.7v-5.9l-1.575-4.5h-8.25L6.3 11.3Zm.9-6.4 1.15-3.3h7.3l1.15 3.3ZM7 14.5v-3h10v3ZM4 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialGarageW100.displayName = 'AmauiIconMaterialGarageW100';

export default IconMaterialGarageW100;
