import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditDocument = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocument'

      short_name='EditDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v4h-2V9h-5V4H6v16h6v2Zm2-2V4v16Zm12.275-5.45 1.075 1.05-3.85 3.85v1.05h1.05l3.85-3.85 1.075 1.05-4.3 4.3H14v-3.175Zm3.2 3.15-3.2-3.15 2.15-2.15 3.175 3.175Z"/>
    </Icon>
  );
});

IconMaterialEditDocument.displayName = 'AmauiIconMaterialEditDocument';

export default IconMaterialEditDocument;
