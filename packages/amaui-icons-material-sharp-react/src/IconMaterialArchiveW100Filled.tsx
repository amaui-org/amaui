import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveW100Filled'

      short_name='Archive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V7.475L5.925 5.6H18.1l1.6 1.95V19.7ZM5.4 7.3h13.2l-.85-1H6.25Zm6.6 9.65 3.1-3.1-.5-.5-2.25 2.25v-4.85h-.7v4.85L9.4 13.35l-.5.5Z"/>
    </Icon>
  );
});

IconMaterialArchiveW100Filled.displayName = 'AmauiIconMaterialArchiveW100Filled';

export default IconMaterialArchiveW100Filled;
