import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169Filled'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17q-.825 0-1.413-.587Q3 15.825 3 15V9q0-.825.587-1.413Q4.175 7 5 7h14q.825 0 1.413.587Q21 8.175 21 9v6q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialCrop169Filled.displayName = 'AmauiIconMaterialCrop169Filled';

export default IconMaterialCrop169Filled;
