import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSpecialFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialFilled'

      short_name='FolderSpecial'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.6 16.7 2.3-1.75 2.3 1.75-.85-2.85 2.3-1.85H15.8l-.9-2.8L14 12h-2.85l2.3 1.85ZM2 20V4h8l2 2h10v14Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialFilled.displayName = 'AmauiIconMaterialFolderSpecialFilled';

export default IconMaterialFolderSpecialFilled;
