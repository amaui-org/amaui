import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApartmentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentFilled'

      short_name='Apartment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V7h4V3h10v8h4v10h-8v-4h-2v4Zm2-2h2v-2H5Zm0-4h2v-2H5Zm0-4h2V9H5Zm4 4h2v-2H9Zm0-4h2V9H9Zm0-4h2V5H9Zm4 8h2v-2h-2Zm0-4h2V9h-2Zm0-4h2V5h-2Zm4 12h2v-2h-2Zm0-4h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialApartmentFilled.displayName = 'AmauiIconMaterialApartmentFilled';

export default IconMaterialApartmentFilled;
