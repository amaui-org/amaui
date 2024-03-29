import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteGo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteGo'

      short_name='ContentPasteGo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H19q.825 0 1.413.587Q21 4.175 21 5v6h-2V5h-2v1q0 .825-.587 1.412Q15.825 8 15 8H9q-.825 0-1.412-.588Q7 6.825 7 6V5H5v14h5v2Zm12.3-.725q-.275-.3-.287-.7-.013-.4.287-.7l.875-.875H13q-.425 0-.712-.288Q12 17.425 12 17t.288-.712Q12.575 16 13 16h5.175l-.9-.9Q17 14.825 17 14.412q0-.412.3-.712.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.3.3-.7.287-.4-.012-.7-.312ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteGo.displayName = 'AmauiIconMaterialContentPasteGo';

export default IconMaterialContentPasteGo;
