import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffW100Filled'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.6 17.775 9.125 6.3H11l1 1h7.2q.65 0 1.075.425.425.425.425 1.075v8.425q0 .175-.025.3t-.075.25Zm.05 3.875L17.7 18.7H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h1.5v1L3.35 4.35q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l17.3 17.3q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialFolderOffW100Filled.displayName = 'AmauiIconMaterialFolderOffW100Filled';

export default IconMaterialFolderOffW100Filled;
