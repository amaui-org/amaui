import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderOuter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuter'

      short_name='BorderOuter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 9V7h2v2Zm0 4v-2h2v2Zm4 0v-2h2v2ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm6-2v-2h2v2Zm-4-4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderOuter.displayName = 'AmauiIconMaterialBorderOuter';

export default IconMaterialBorderOuter;
