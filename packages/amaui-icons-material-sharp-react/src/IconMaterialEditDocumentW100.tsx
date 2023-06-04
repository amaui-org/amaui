import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditDocumentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentW100'

      short_name='EditDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05v3.475H18V7.7h-3.7V4H6v16h5.05v.7ZM6 20V4v16Zm11.1-5.425.5.475-3.85 3.85v1.05h1.05l3.85-3.85.5.5-4.05 4.05h-2.05v-2.025Zm2.05 2.025-2.05-2.025 1.6-1.6 2.05 2.05Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentW100.displayName = 'AmauiIconMaterialEditDocumentW100';

export default IconMaterialEditDocumentW100;
