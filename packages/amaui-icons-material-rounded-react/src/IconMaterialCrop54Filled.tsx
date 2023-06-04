import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop54Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54Filled'

      short_name='Crop54'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.825 0-1.413-.587Q3 18.825 3 18V6q0-.825.587-1.412Q4.175 4 5 4h14q.825 0 1.413.588Q21 5.175 21 6v12q0 .825-.587 1.413Q19.825 20 19 20Z"/>
    </Icon>
  );
});

IconMaterialCrop54Filled.displayName = 'AmauiIconMaterialCrop54Filled';

export default IconMaterialCrop54Filled;
