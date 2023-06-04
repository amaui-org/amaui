import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32Filled'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18q-.825 0-1.413-.587Q3 16.825 3 16V8q0-.825.587-1.412Q4.175 6 5 6h14q.825 0 1.413.588Q21 7.175 21 8v8q0 .825-.587 1.413Q19.825 18 19 18Z"/>
    </Icon>
  );
});

IconMaterialCrop32Filled.displayName = 'AmauiIconMaterialCrop32Filled';

export default IconMaterialCrop32Filled;
