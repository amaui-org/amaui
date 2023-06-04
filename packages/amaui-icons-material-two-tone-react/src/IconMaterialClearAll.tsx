import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClearAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAll'

      short_name='ClearAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z"/>
    </Icon>
  );
});

IconMaterialClearAll.displayName = 'AmauiIconMaterialClearAll';

export default IconMaterialClearAll;
