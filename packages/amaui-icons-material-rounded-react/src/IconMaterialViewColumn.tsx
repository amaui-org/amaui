import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumn'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7q0-.825.587-1.412Q4.175 5 5 5h13.975q.825 0 1.413.588.587.587.587 1.412v10q0 .825-.587 1.413Q19.8 19 18.975 19H5q-.825 0-1.413-.587Q3 17.825 3 17Zm2 0h3.325V7H5v10Zm5.325 0h3.325V7h-3.325v10Zm5.325 0h3.325V7H15.65v10Z"/>
    </Icon>
  );
});

IconMaterialViewColumn.displayName = 'AmauiIconMaterialViewColumn';

export default IconMaterialViewColumn;
