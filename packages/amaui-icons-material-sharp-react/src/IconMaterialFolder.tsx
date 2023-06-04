import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Folder'

      short_name='Folder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 4h8l2 2h10v14H2Zm2 2v12h16V8h-8.825l-2-2Zm0 12V6v12Z"/>
    </Icon>
  );
});

IconMaterialFolder.displayName = 'AmauiIconMaterialFolder';

export default IconMaterialFolder;
