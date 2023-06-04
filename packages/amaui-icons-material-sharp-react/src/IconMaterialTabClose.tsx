import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabClose'

      short_name='TabClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m476 636 84-84 84 84 56-56-84-84 84-84-56-56-84 84-84-84-56 56 84 84-84 84 56 56ZM240 816V176h640v640H240Zm80-80h480V256H320v480ZM80 976V336h80v560h560v80H80Zm240-240V256v480Z"/>
    </Icon>
  );
});

IconMaterialTabClose.displayName = 'AmauiIconMaterialTabClose';

export default IconMaterialTabClose;
