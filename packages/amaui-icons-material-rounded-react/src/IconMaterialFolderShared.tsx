import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderShared = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderShared'

      short_name='FolderShared'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 13q.825 0 1.413-.588Q17 11.825 17 11t-.587-1.413Q15.825 9 15 9q-.825 0-1.412.587Q13 10.175 13 11q0 .825.588 1.412Q14.175 13 15 13Zm-4 4h8v-.55q0-1.125-1.1-1.788Q16.8 14 15 14q-1.8 0-2.9.662-1.1.663-1.1 1.788Zm-7 3q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/>
    </Icon>
  );
});

IconMaterialFolderShared.displayName = 'AmauiIconMaterialFolderShared';

export default IconMaterialFolderShared;
