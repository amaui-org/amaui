import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaic'

      short_name='AutoAwesomeMosaic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6Zm-2-2V5H5v14Zm4-8V3h6q.825 0 1.413.587Q21 4.175 21 5v6Zm2-2h4V5h-4Zm-2 12v-8h8v6q0 .825-.587 1.413Q19.825 21 19 21Zm2-2h4v-4h-4Zm-6-7Zm6-3Zm0 6Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaic.displayName = 'AmauiIconMaterialAutoAwesomeMosaic';

export default IconMaterialAutoAwesomeMosaic;
