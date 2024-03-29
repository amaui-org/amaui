import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness7Filled'

      short_name='Brightness7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.675 20h-2.65q-.825 0-1.412-.587-.588-.588-.588-1.413v-2.65L2.1 13.4q-.575-.575-.575-1.4t.575-1.4l1.925-1.95V6q0-.825.588-1.412Q5.2 4 6.025 4h2.65l1.95-1.925q.575-.575 1.4-.575t1.4.575L15.375 4h2.65q.825 0 1.413.588.587.587.587 1.412v2.65l1.925 1.95q.575.575.575 1.4t-.575 1.4l-1.925 1.95V18q0 .825-.587 1.413-.588.587-1.413.587h-2.65l-1.95 1.925q-.575.575-1.4.575t-1.4-.575Zm3.35-3q2.075 0 3.538-1.463 1.462-1.462 1.462-3.537t-1.462-3.538Q14.1 7 12.025 7 9.95 7 8.488 8.462 7.025 9.925 7.025 12q0 2.075 1.463 3.537Q9.95 17 12.025 17Z"/>
    </Icon>
  );
});

IconMaterialBrightness7Filled.displayName = 'AmauiIconMaterialBrightness7Filled';

export default IconMaterialBrightness7Filled;
