import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Switch'

      short_name='Switch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17h8V7H8Zm2-2V9h4v6Zm1-3h2v-2h-2Zm-6 9q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialSwitch.displayName = 'AmauiIconMaterialSwitch';

export default IconMaterialSwitch;
