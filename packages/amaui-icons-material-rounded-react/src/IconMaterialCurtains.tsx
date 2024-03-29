import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtains = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Curtains'

      short_name='Curtains'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h3.95q-.2-1.75-1.15-3.538-.95-1.787-2.8-2.312ZM6 5v5.85q1.85-.525 2.8-2.313Q9.75 6.75 9.95 5H6Zm2.225 7q1.7 1.125 2.625 3.075.925 1.95 1.1 3.925h.1q.175-1.975 1.1-3.925.925-1.95 2.625-3.075-1.7-1.125-2.625-3.075-.925-1.95-1.1-3.925h-.1q-.175 1.975-1.1 3.925-.925 1.95-2.625 3.075ZM18 10.85V5h-3.95q.2 1.75 1.15 3.537.95 1.788 2.8 2.313ZM18 19v-5.85q-1.85.525-2.787 2.312-.938 1.788-1.138 3.538ZM3 21q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h1V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21ZM6 5v5.85Zm12 14v-5.85ZM6 19v-5.85V19Zm12-8.15V5Z"/>
    </Icon>
  );
});

IconMaterialCurtains.displayName = 'AmauiIconMaterialCurtains';

export default IconMaterialCurtains;
