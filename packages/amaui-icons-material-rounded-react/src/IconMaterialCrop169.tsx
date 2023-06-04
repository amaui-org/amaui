import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17q-.825 0-1.413-.587Q3 15.825 3 15V9q0-.825.587-1.413Q4.175 7 5 7h14q.825 0 1.413.587Q21 8.175 21 9v6q0 .825-.587 1.413Q19.825 17 19 17Zm0-2h14V9H5v6Zm0 0V9v6Z"/>
    </Icon>
  );
});

IconMaterialCrop169.displayName = 'AmauiIconMaterialCrop169';

export default IconMaterialCrop169;
