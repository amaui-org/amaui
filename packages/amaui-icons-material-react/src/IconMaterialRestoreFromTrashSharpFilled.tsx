import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashSharpFilled'
      short_name='RestoreFromTrash'

      {...props}
    >
      <path d="M11 16H13V11.85L14.6 13.4L16 12L12 8L8 12L9.4 13.4L11 11.85ZM5 21V6H4V4H9V3H15V4H20V6H19V21Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashSharpFilled.displayName = 'AmauiIconMaterialRestoreFromTrashSharpFilled';

export default IconMaterialRestoreFromTrashSharpFilled;
