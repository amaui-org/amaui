import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSharedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedW100'

      short_name='FolderShared'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 12.6q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q15.575 9.9 15 9.9t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-3.1 3.5h6.2v-.05q0-.8-.812-1.225Q16.475 14.4 15 14.4q-1.475 0-2.287.425-.813.425-.813 1.225Zm-8.6 2.6V6.3H11l1 1h8.7v11.4ZM4 18h16V8h-8.275l-1-1H4Zm0 0V7v1Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedW100.displayName = 'AmauiIconMaterialFolderSharedW100';

export default IconMaterialFolderSharedW100;
