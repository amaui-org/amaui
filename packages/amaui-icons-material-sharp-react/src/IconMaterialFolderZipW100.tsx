import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderZipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipW100'

      short_name='FolderZip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V6.3H11l1 1h8.7v11.4ZM16 18h4V8h-4v2h2v2h-2v2h2v2h-2ZM4 18h10v-2h2v-2h-2v-2h2v-2h-2V8h-2.275l-1-1H4ZM4 8V7v11Z"/>
    </Icon>
  );
});

IconMaterialFolderZipW100.displayName = 'AmauiIconMaterialFolderZipW100';

export default IconMaterialFolderZipW100;
