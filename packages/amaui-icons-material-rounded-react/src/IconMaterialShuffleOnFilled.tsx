import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnFilled'

      short_name='ShuffleOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23q-.825 0-1.412-.587Q1 21.825 1 21V3q0-.825.588-1.413Q2.175 1 3 1h18q.825 0 1.413.587Q23 2.175 23 3v18q0 .825-.587 1.413Q21.825 23 21 23Zm6.175-12.425 1.4-1.4L6.1 4.7q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7ZM15 20h4q.425 0 .712-.288Q20 19.425 20 19v-4q0-.425-.288-.713Q19.425 14 19 14t-.712.287Q18 14.575 18 15v1.55l-3.175-3.175L13.4 14.8l3.2 3.2H15q-.425 0-.712.288Q14 18.575 14 19t.288.712Q14.575 20 15 20Zm-10.3-.7q.275.275.7.275.425 0 .7-.275L18 7.4V9q0 .425.288.712.287.288.712.288t.712-.288Q20 9.425 20 9V5q0-.425-.288-.713Q19.425 4 19 4h-4q-.425 0-.712.287Q14 4.575 14 5t.288.713Q14.575 6 15 6h1.6L4.7 17.9q-.275.275-.275.7 0 .425.275.7Z"/>
    </Icon>
  );
});

IconMaterialShuffleOnFilled.displayName = 'AmauiIconMaterialShuffleOnFilled';

export default IconMaterialShuffleOnFilled;
