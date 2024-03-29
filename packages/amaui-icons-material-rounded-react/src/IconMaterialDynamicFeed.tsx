import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeed'

      short_name='DynamicFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q-.825 0-1.412-.587Q6 15.825 6 15V9q0-.425.287-.713Q6.575 8 7 8t.713.287Q8 8.575 8 9v6h8q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 17 16 17Zm4-4q-.825 0-1.412-.588Q10 11.825 10 11V5q0-.825.588-1.413Q11.175 3 12 3h8q.825 0 1.413.587Q22 4.175 22 5v6q0 .825-.587 1.412Q20.825 13 20 13Zm0-2h8V7h-8v4ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19v-6q0-.425.288-.713Q2.575 12 3 12t.713.287Q4 12.575 4 13v6h8q.425 0 .713.288.287.287.287.712t-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeed.displayName = 'AmauiIconMaterialDynamicFeed';

export default IconMaterialDynamicFeed;
