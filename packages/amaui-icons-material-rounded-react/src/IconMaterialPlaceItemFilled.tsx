import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaceItemFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaceItemFilled'

      short_name='PlaceItem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V9q0-.825.587-1.413Q4.175 7 5 7h4v2H5v10h14V9h-4V7h4q.825 0 1.413.587Q21 8.175 21 9v10q0 .825-.587 1.413Q19.825 21 19 21Zm7-5-4-4 1.4-1.4 1.6 1.575V0h2v12.175l1.6-1.575L16 12Z"/>
    </Icon>
  );
});

IconMaterialPlaceItemFilled.displayName = 'AmauiIconMaterialPlaceItemFilled';

export default IconMaterialPlaceItemFilled;
