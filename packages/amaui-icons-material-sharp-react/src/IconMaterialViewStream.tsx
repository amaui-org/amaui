import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewStream = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStream'

      short_name='ViewStream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 17v-4H5v4h14Zm0-6V7H5v4h14ZM5 19q-.825 0-1.413-.587Q3 17.825 3 17V7q0-.825.587-1.412Q4.175 5 5 5h14q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413Q19.825 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialViewStream.displayName = 'AmauiIconMaterialViewStream';

export default IconMaterialViewStream;
