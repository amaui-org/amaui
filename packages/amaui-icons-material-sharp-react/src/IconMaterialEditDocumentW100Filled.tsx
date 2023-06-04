import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditDocumentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentW100Filled'

      short_name='EditDocument'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05v3.175l-7.65 7.625v2.55Zm7.75-.025v-1l4.35-4.325 1 1-4.35 4.325Zm5.825-4.825-.975-1 1.35-1.35 1 1ZM14.3 7.7H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentW100Filled.displayName = 'AmauiIconMaterialEditDocumentW100Filled';

export default IconMaterialEditDocumentW100Filled;
