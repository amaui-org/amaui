import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness5Filled'

      short_name='Brightness5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.675 20h-2.65q-.825 0-1.412-.587-.588-.588-.588-1.413v-2.65L2.1 13.4q-.575-.575-.575-1.4t.575-1.4l1.925-1.95V6q0-.825.588-1.412Q5.2 4 6.025 4h2.65l1.95-1.925q.575-.575 1.4-.575t1.4.575L15.375 4h2.65q.825 0 1.413.588.587.587.587 1.412v2.65l1.925 1.95q.575.575.575 1.4t-.575 1.4l-1.925 1.95V18q0 .825-.587 1.413-.588.587-1.413.587h-2.65l-1.95 1.925q-.575.575-1.4.575t-1.4-.575Zm3.35-3q-2.075 0-3.537-1.463Q7.025 14.075 7.025 12t1.463-3.538Q9.95 7 12.025 7t3.538 1.462Q17.025 9.925 17.025 12q0 2.075-1.462 3.537Q14.1 17 12.025 17Zm0 3.5 2.5-2.5h3.5v-3.5l2.5-2.5-2.5-2.5V6h-3.5l-2.5-2.5-2.5 2.5h-3.5v3.5l-2.5 2.5 2.5 2.5V18h3.5Z"/>
    </Icon>
  );
});

IconMaterialBrightness5Filled.displayName = 'AmauiIconMaterialBrightness5Filled';

export default IconMaterialBrightness5Filled;
