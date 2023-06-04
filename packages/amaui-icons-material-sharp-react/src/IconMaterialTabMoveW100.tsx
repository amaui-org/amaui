import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabMoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabMoveW100'

      short_name='TabMove'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884V734h28v122h560V384H200v122h-28V268h616v616H172Zm268-121-19-19 108-110H172v-28h357L421 496l19-19 143 143-143 143Z"/>
    </Icon>
  );
});

IconMaterialTabMoveW100.displayName = 'AmauiIconMaterialTabMoveW100';

export default IconMaterialTabMoveW100;
