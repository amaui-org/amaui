import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSpecial = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecial'

      short_name='FolderSpecial'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.9 14.95 1.075.825q.275.225.575.012.3-.212.2-.562l-.4-1.375 1.2-.95q.275-.2.15-.55-.125-.35-.475-.35H15.8l-.425-1.325q-.125-.35-.475-.35t-.475.35L14 12h-1.425q-.35 0-.475.35t.15.55l1.2.95-.4 1.375q-.1.35.2.562.3.213.575-.012ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecial.displayName = 'AmauiIconMaterialFolderSpecial';

export default IconMaterialFolderSpecial;
