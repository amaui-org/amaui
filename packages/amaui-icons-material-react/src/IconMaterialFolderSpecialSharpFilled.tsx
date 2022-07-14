import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSpecialSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialSharpFilled'
      short_name='FolderSpecial'

      {...props}
    >
      <path d="M12.6 16.7 14.9 14.95 17.2 16.7 16.35 13.85 18.65 12H15.8L14.9 9.2L14 12H11.15L13.45 13.85ZM2 20V4H10L12 6H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialFolderSpecialSharpFilled;
