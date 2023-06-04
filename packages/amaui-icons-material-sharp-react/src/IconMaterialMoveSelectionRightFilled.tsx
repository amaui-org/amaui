import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveSelectionRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveSelectionRightFilled'

      short_name='MoveSelectionRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 816V336h480v480H400Zm-160 0v-80h80v80h-80Zm0-400v-80h80v80h-80ZM80 816v-80h80v80H80Zm0-200v-80h80v80H80Zm0-200v-80h80v80H80Z"/>
    </Icon>
  );
});

IconMaterialMoveSelectionRightFilled.displayName = 'AmauiIconMaterialMoveSelectionRightFilled';

export default IconMaterialMoveSelectionRightFilled;
