import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClearAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllW100Filled'

      short_name='ClearAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 16.35v-.7h12.7v.7Zm2-4v-.7h12.7v.7Zm2-4v-.7h12.7v.7Z"/>
    </Icon>
  );
});

IconMaterialClearAllW100Filled.displayName = 'AmauiIconMaterialClearAllW100Filled';

export default IconMaterialClearAllW100Filled;
