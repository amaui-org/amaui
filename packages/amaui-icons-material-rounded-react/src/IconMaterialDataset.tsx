import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dataset'

      short_name='Dataset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h4v-4H7Zm6 0h4v-4h-4Zm-6-6h4V7H7Zm6 0h4V7h-4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialDataset.displayName = 'AmauiIconMaterialDataset';

export default IconMaterialDataset;
