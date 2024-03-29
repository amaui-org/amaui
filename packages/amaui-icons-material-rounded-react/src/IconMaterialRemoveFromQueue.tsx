import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueue = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueue'

      short_name='RemoveFromQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 12h6q.425 0 .713-.288Q16 11.425 16 11t-.287-.713Q15.425 10 15 10H9q-.425 0-.712.287Q8 10.575 8 11t.288.712Q8.575 12 9 12Zm0 9q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm-5-4h16V5H4v12Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueue.displayName = 'AmauiIconMaterialRemoveFromQueue';

export default IconMaterialRemoveFromQueue;
