import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKettle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Kettle'

      short_name='Kettle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19V6L3 2h15v3h2q.825 0 1.413.588Q22 6.175 22 7v5q0 .825-.587 1.412Q20.825 14 20 14h-2v5Zm2-2h8V4H7l1 1.3Zm10-5h2V7h-2Zm-6 4h3V5h-3Zm-9 6v-2h18v2Zm5-5h8Z"/>
    </Icon>
  );
});

IconMaterialKettle.displayName = 'AmauiIconMaterialKettle';

export default IconMaterialKettle;
