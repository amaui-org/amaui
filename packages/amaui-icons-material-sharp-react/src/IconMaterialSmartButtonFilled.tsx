import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartButtonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonFilled'

      short_name='SmartButton'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V7h20v10h-3v-2h1V9H4v6h6v2Zm12.5 2-1.1-2.4-2.4-1.1 2.4-1.1 1.1-2.4 1.1 2.4 2.4 1.1-2.4 1.1Zm2.5-5-.625-1.375L15 12l1.375-.625L17 10l.625 1.375L19 12l-1.375.625Z"/>
    </Icon>
  );
});

IconMaterialSmartButtonFilled.displayName = 'AmauiIconMaterialSmartButtonFilled';

export default IconMaterialSmartButtonFilled;
