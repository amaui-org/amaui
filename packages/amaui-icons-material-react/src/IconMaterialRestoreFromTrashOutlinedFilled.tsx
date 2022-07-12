import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashOutlinedFilled'
      short_name='RestoreFromTrash'

      {...props}
    >
      <path d="M11 18H13V13.825L14.1 14.9L15.5 13.5L12 10L8.5 13.5L9.9 14.9L11 13.825ZM5 6V4H8.5L9.5 3H14.5L15.5 4H19V6ZM8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V7H18V19Q18 19.825 17.413 20.413Q16.825 21 16 21Z"/>
    </Icon>
  )
});

export default IconMaterialRestoreFromTrashOutlinedFilled;
