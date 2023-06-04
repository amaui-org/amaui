import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertTextW100Filled'

      short_name='InsertText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16V8.7h-3V8h6.7v.7h-3V16ZM2.8 21.2v-3.7h1.5v-11H2.8V2.8h3.7v1.5h11V2.8h3.7v3.7h-1.5v11h1.5v3.7h-3.7v-1.5h-11v1.5ZM6.5 19h11v-1.5H19v-11h-1.5V5h-11v1.5H5v11h1.5Z"/>
    </Icon>
  );
});

IconMaterialInsertTextW100Filled.displayName = 'AmauiIconMaterialInsertTextW100Filled';

export default IconMaterialInsertTextW100Filled;
