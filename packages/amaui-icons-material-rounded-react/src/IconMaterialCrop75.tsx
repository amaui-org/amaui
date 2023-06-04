import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop75 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75'

      short_name='Crop75'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-.825 0-1.413-.587Q3 17.825 3 17V7q0-.825.587-1.412Q4.175 5 5 5h14q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413Q19.825 19 19 19Zm0-2h14V7H5v10Zm0 0V7v10Z"/>
    </Icon>
  );
});

IconMaterialCrop75.displayName = 'AmauiIconMaterialCrop75';

export default IconMaterialCrop75;
