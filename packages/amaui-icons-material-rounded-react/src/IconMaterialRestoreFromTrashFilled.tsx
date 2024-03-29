import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashFilled'

      short_name='RestoreFromTrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21Zm4-9.15V15q0 .425.288.712.287.288.712.288t.713-.288Q13 15.425 13 15v-3.15l.9.875q.3.275.713.263.412-.013.687-.288.275-.275.275-.7 0-.425-.275-.7l-2.6-2.6q-.275-.275-.7-.275-.425 0-.7.275l-2.6 2.6q-.275.275-.275.7 0 .425.275.7.275.275.687.288.413.012.713-.263Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashFilled.displayName = 'AmauiIconMaterialRestoreFromTrashFilled';

export default IconMaterialRestoreFromTrashFilled;
