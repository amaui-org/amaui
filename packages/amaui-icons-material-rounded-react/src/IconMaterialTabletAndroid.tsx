import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletAndroid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletAndroid'

      short_name='TabletAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 20h3q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM5 23q-.825 0-1.413-.587Q3 21.825 3 21V3q0-.825.587-1.413Q4.175 1 5 1h14q.825 0 1.413.587Q21 2.175 21 3v18q0 .825-.587 1.413Q19.825 23 19 23Zm0-7h14V6H5Zm0 2v3h14v-3ZM5 4h14V3H5Zm0-1v1-1Zm0 18v-3 3Z"/>
    </Icon>
  );
});

IconMaterialTabletAndroid.displayName = 'AmauiIconMaterialTabletAndroid';

export default IconMaterialTabletAndroid;
