import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPiano = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Piano'

      short_name='Piano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h3.25v-4.5H7V5H5Zm10.75 0H19V5h-2v9.5h-1.25Zm-6 0h4.5v-4.5H13V5h-2v9.5H9.75Z"/>
    </Icon>
  );
});

IconMaterialPiano.displayName = 'AmauiIconMaterialPiano';

export default IconMaterialPiano;
