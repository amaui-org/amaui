import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenW100'

      short_name='FolderOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V6.3H11l1 1h8.475V8h-8.75l-1-1H4v10.95h.5L6.875 10h15.95l-2.6 8.7Zm1.925-.7H19.7l2.175-7.3H7.4Zm0 0L7.4 10.7 5.225 18ZM4 8V7v1Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenW100.displayName = 'AmauiIconMaterialFolderOpenW100';

export default IconMaterialFolderOpenW100;
