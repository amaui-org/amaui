import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextFilled'

      short_name='QueuePlayNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q.425 0 .713-.288Q13 14.425 13 14v-2h2q.425 0 .713-.288Q16 11.425 16 11t-.287-.713Q15.425 10 15 10h-2V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v2H9q-.425 0-.712.287Q8 10.575 8 11t.288.712Q8.575 12 9 12h2v2q0 .425.288.712.287.288.712.288Zm6.75 6.75q-.325-.325-.325-.75t.325-.75L21 18l-2.25-2.25q-.15-.15-.237-.35-.088-.2-.088-.4t.088-.4q.087-.2.237-.35.325-.325.75-.325t.75.325l3.05 3.05q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.05 3.05q-.325.325-.75.325t-.75-.325ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v7h-3q-.825 0-1.413.587Q17 13.175 17 14v5h-2v1q0 .425-.287.712Q14.425 21 14 21Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextFilled.displayName = 'AmauiIconMaterialQueuePlayNextFilled';

export default IconMaterialQueuePlayNextFilled;
