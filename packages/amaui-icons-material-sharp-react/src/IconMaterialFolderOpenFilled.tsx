import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenFilled'

      short_name='FolderOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h8l2 2h10v2H4v10l2.4-8h17.1l-3 10Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenFilled.displayName = 'AmauiIconMaterialFolderOpenFilled';

export default IconMaterialFolderOpenFilled;
