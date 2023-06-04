import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApartmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentW100Filled'

      short_name='Apartment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 19.9q-.275 0-.487-.212-.213-.213-.213-.488V7.9q0-.275.213-.488.212-.212.487-.212h3.3V3.9q0-.275.213-.488.212-.212.487-.212h7.3q.275 0 .488.212.212.213.212.488v7.3h3.3q.275 0 .488.212.212.213.212.488v7.3q0 .275-.212.488-.213.212-.488.212h-6v-4h-3.3v4Zm0-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm4 4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 8h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Z"/>
    </Icon>
  );
});

IconMaterialApartmentW100Filled.displayName = 'AmauiIconMaterialApartmentW100Filled';

export default IconMaterialApartmentW100Filled;
