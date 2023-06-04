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
      <path d="M3.65 19.9V7.2h4v-4h8.7v8h4v8.7h-6.7v-4h-3.3v4Zm.7-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm4 4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 8h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Z"/>
    </Icon>
  );
});

IconMaterialApartmentW100Filled.displayName = 'AmauiIconMaterialApartmentW100Filled';

export default IconMaterialApartmentW100Filled;
