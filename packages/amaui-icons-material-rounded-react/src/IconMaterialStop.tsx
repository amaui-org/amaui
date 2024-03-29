import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stop'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 8v8Zm0 10q-.825 0-1.412-.587Q6 16.825 6 16V8q0-.825.588-1.412Q7.175 6 8 6h8q.825 0 1.413.588Q18 7.175 18 8v8q0 .825-.587 1.413Q16.825 18 16 18Zm0-2h8V8H8Z"/>
    </Icon>
  );
});

IconMaterialStop.displayName = 'AmauiIconMaterialStop';

export default IconMaterialStop;
