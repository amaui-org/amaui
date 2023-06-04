import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderZip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZip'

      short_name='FolderZip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h8l2 2h10v14Zm14-2h4V8h-4v2h2v2h-2v2h2v2h-2ZM4 18h10v-2h2v-2h-2v-2h2v-2h-2V8h-2.825l-2-2H4ZM4 8V6v12Z"/>
    </Icon>
  );
});

IconMaterialFolderZip.displayName = 'AmauiIconMaterialFolderZip';

export default IconMaterialFolderZip;
