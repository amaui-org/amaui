import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventBusyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyFilled'

      short_name='EventBusy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.4 10.4 18q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l1.6-1.6L9 13.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.6 1.6 1.6-1.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 15l1.6 1.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/>
    </Icon>
  );
});

IconMaterialEventBusyFilled.displayName = 'AmauiIconMaterialEventBusyFilled';

export default IconMaterialEventBusyFilled;
