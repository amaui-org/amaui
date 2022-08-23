import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDragHandleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleRounded'
      short_name='DragHandle'

      {...props}
    >
      <path d="M5 11Q4.575 11 4.287 10.712Q4 10.425 4 10Q4 9.575 4.287 9.287Q4.575 9 5 9H19Q19.425 9 19.712 9.287Q20 9.575 20 10Q20 10.425 19.712 10.712Q19.425 11 19 11ZM5 15Q4.575 15 4.287 14.712Q4 14.425 4 14Q4 13.575 4.287 13.287Q4.575 13 5 13H19Q19.425 13 19.712 13.287Q20 13.575 20 14Q20 14.425 19.712 14.712Q19.425 15 19 15Z"/>
    </Icon>
  );
});

IconMaterialDragHandleRounded.displayName = 'AmauiIconMaterialDragHandleRounded';

export default IconMaterialDragHandleRounded;
