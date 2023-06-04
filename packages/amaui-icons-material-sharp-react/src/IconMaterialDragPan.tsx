import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragPan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragPan'

      short_name='DragPan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976 310 806l57-57 73 73V616l-205-1 73 73-58 58L80 576l169-169 57 57-72 72h206V330l-73 73-57-57 170-170 170 170-57 57-73-73v206l205 1-73-73 58-58 170 170-170 170-57-57 73-73H520l-1 205 73-73 58 58-170 170Z"/>
    </Icon>
  );
});

IconMaterialDragPan.displayName = 'AmauiIconMaterialDragPan';

export default IconMaterialDragPan;
