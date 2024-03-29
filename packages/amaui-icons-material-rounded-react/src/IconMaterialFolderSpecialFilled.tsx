import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSpecialFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialFilled'

      short_name='FolderSpecial'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.9 14.95 1.075.825q.275.2.587 0 .313-.2.188-.55l-.4-1.375 1.2-.95q.275-.225.162-.563Q17.6 12 17.225 12H15.8l-.425-1.325q-.125-.35-.475-.35t-.475.35L14 12h-1.425q-.375 0-.487.337-.113.338.162.563l1.2.95-.4 1.375q-.125.35.188.55.312.2.587 0ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialFilled.displayName = 'AmauiIconMaterialFolderSpecialFilled';

export default IconMaterialFolderSpecialFilled;
