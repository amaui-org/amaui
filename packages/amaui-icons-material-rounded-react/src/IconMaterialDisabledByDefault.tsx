import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisabledByDefault = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefault'

      short_name='DisabledByDefault'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h14V5H5Zm0 2q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm2.7-4.7q.275.275.7.275.425 0 .7-.275l2.9-2.9 2.9 2.9q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275L12 10.6 9.1 7.7q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l2.9 2.9-2.9 2.9q-.275.275-.275.7 0 .425.275.7ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefault.displayName = 'AmauiIconMaterialDisabledByDefault';

export default IconMaterialDisabledByDefault;
