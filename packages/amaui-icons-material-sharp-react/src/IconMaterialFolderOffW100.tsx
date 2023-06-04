import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffW100'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 17.875-.7-.7V8h-8.275l-1-1h-.9l-.7-.7H11l1 1h8.7Zm-9.15-5.3Zm3.4-.45ZM20.9 21.9l-3.2-3.2H3.3V6.3h3L7 7H4v11h12.975L3.1 4.1l.5-.5 17.8 17.8Z"/>
    </Icon>
  );
});

IconMaterialFolderOffW100.displayName = 'AmauiIconMaterialFolderOffW100';

export default IconMaterialFolderOffW100;
