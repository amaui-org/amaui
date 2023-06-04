import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveGroup'

      short_name='MoveGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 816V656h80v80h480V336H320v80h-80V176h640v640H240ZM80 976V336h80v560h560v80H80Zm440-280-56-56 63-64H240v-80h287l-63-64 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialMoveGroup.displayName = 'AmauiIconMaterialMoveGroup';

export default IconMaterialMoveGroup;
