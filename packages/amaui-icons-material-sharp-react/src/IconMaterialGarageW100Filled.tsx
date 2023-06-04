import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageW100Filled'

      short_name='Garage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V3.3h17.4v17.4Zm5.2-7q-.275 0-.488-.213Q7.8 13.275 7.8 13t.212-.488q.213-.212.488-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm7 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-9.2 3.5H7v-2h10v2h.7v-5.9l-1.575-4.5h-8.25L6.3 11.3Zm.9-6.4 1.15-3.3h7.3l1.15 3.3Z"/>
    </Icon>
  );
});

IconMaterialGarageW100Filled.displayName = 'AmauiIconMaterialGarageW100Filled';

export default IconMaterialGarageW100Filled;
