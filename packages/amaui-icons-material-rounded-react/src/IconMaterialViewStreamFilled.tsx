import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewStreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamFilled'

      short_name='ViewStream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11q-.825 0-1.413-.588Q3 9.825 3 9V7q0-.825.587-1.412Q4.175 5 5 5h14q.825 0 1.413.588Q21 6.175 21 7v2q0 .825-.587 1.412Q19.825 11 19 11Zm0 8q-.825 0-1.413-.587Q3 17.825 3 17v-2q0-.825.587-1.413Q4.175 13 5 13h14q.825 0 1.413.587Q21 14.175 21 15v2q0 .825-.587 1.413Q19.825 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialViewStreamFilled.displayName = 'AmauiIconMaterialViewStreamFilled';

export default IconMaterialViewStreamFilled;
