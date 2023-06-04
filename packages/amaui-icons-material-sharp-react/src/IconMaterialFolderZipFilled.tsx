import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderZipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipFilled'

      short_name='FolderZip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h8l2 2h10v14Zm12-2h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2Z"/>
    </Icon>
  );
});

IconMaterialFolderZipFilled.displayName = 'AmauiIconMaterialFolderZipFilled';

export default IconMaterialFolderZipFilled;
