import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfPosition = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPosition'

      short_name='ShelfPosition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V216h760v720H120Zm80-200v120h600V736H200Zm480-80h120V296H680v360Zm-480 0h120V296H200v360Zm200 0h200V296H400v360Z"/>
    </Icon>
  );
});

IconMaterialShelfPosition.displayName = 'AmauiIconMaterialShelfPosition';

export default IconMaterialShelfPosition;
