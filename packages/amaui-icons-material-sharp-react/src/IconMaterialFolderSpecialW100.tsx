import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSpecialW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialW100'

      short_name='FolderSpecial'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.15 15.925 1.75-1.35 1.75 1.35L16 13.75l1.775-1.45H15.6l-.7-2.125-.7 2.125h-2.175l1.775 1.45ZM3.3 18.7V6.3H11l1 1h8.7v11.4ZM4 18h16V8h-8.275l-1-1H4Zm0 0V7v1Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialW100.displayName = 'AmauiIconMaterialFolderSpecialW100';

export default IconMaterialFolderSpecialW100;
