import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpSharpW100Filled'
      short_name='ArrowsMoreUp'

      {...props}
    >
      <path d="M13.3 17.7v-9h-9V8H14v9.7Zm3.7-3.675v-9H8v-.7h9.7v9.7Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUpSharpW100Filled.displayName = 'AmauiIconMaterialArrowsMoreUpSharpW100Filled';

export default IconMaterialArrowsMoreUpSharpW100Filled;
