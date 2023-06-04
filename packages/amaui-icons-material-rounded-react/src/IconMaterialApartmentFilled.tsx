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
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V9q0-.825.587-1.413Q4.175 7 5 7h2V5q0-.825.588-1.413Q8.175 3 9 3h6q.825 0 1.413.587Q17 4.175 17 5v6h2q.825 0 1.413.587Q21 12.175 21 13v6q0 .825-.587 1.413Q19.825 21 19 21h-6v-4h-2v4Zm0-2h2v-2H5Zm0-4h2v-2H5Zm0-4h2V9H5Zm4 4h2v-2H9Zm0-4h2V9H9Zm0-4h2V5H9Zm4 8h2v-2h-2Zm0-4h2V9h-2Zm0-4h2V5h-2Zm4 12h2v-2h-2Zm0-4h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialApartmentFilled.displayName = 'AmauiIconMaterialApartmentFilled';

export default IconMaterialApartmentFilled;
