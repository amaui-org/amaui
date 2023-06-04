import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroup'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 816V176h640v640H240Zm80-80h480V416H520V256H320v480ZM80 976V336h80v560h560v80H80Zm240-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabGroup.displayName = 'AmauiIconMaterialTabGroup';

export default IconMaterialTabGroup;
