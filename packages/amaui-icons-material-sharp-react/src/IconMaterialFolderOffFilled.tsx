import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffFilled'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 19.175 6.825 4H10l2 2h10ZM20.475 23.3l-3.3-3.3H2V4h2v2.8L.7 3.5l1.4-1.4 19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialFolderOffFilled.displayName = 'AmauiIconMaterialFolderOffFilled';

export default IconMaterialFolderOffFilled;
