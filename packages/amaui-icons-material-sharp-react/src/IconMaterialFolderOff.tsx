import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOff'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.175-2-2V8h-8.825l-2-2h-.35l-2-2H10l2 2h10Zm-12.35-6.7Zm4.8-.85ZM20.475 23.3l-3.3-3.3H2V4h2l2 2H4v12h11.175L.7 3.5l1.4-1.4 19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialFolderOff.displayName = 'AmauiIconMaterialFolderOff';

export default IconMaterialFolderOff;
