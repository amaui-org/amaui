import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNfc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nfc'

      short_name='Nfc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 17q.825 0 1.413-.587Q17 15.825 17 15V9q0-.825-.587-1.413Q15.825 7 15 7h-2q-.825 0-1.412.587Q11 8.175 11 9v1.3q-.5.275-.75.7-.25.425-.25 1 0 .825.588 1.412Q11.175 14 12 14t1.413-.588Q14 12.825 14 12q0-.575-.275-1-.275-.425-.725-.7V9h2v6H9V9h1V7H9q-.825 0-1.412.587Q7 8.175 7 9v6q0 .825.588 1.413Q8.175 17 9 17ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialNfc.displayName = 'AmauiIconMaterialNfc';

export default IconMaterialNfc;
