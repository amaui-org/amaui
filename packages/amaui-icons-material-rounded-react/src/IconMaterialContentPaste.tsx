import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPaste = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPaste'

      short_name='ContentPaste'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5h-2v1q0 .825-.587 1.412Q15.825 8 15 8H9q-.825 0-1.412-.588Q7 6.825 7 6V5H5v14Z"/>
    </Icon>
  );
});

IconMaterialContentPaste.displayName = 'AmauiIconMaterialContentPaste';

export default IconMaterialContentPaste;
