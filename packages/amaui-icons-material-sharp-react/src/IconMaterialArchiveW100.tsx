import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveW100'

      short_name='Archive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V7.475L5.925 5.6H18.1l1.6 1.95V19.7ZM5.4 7.3h13.2l-.85-1H6.25ZM5 19h14V8H5Zm7-2.05 3.1-3.1-.5-.5-2.25 2.25v-4.85h-.7v4.85L9.4 13.35l-.5.5ZM5 19V8v11Z"/>
    </Icon>
  );
});

IconMaterialArchiveW100.displayName = 'AmauiIconMaterialArchiveW100';

export default IconMaterialArchiveW100;
