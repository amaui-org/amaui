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
      <path d="M3 17v-2h14v2Zm2-4v-2h14v2Zm2-4V7h14v2Z"/>
    </Icon>
  );
});

IconMaterialClearAll.displayName = 'AmauiIconMaterialClearAll';

export default IconMaterialClearAll;
