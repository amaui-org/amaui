import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpW100Filled'

      short_name='ArrowsMoreUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.3 17.7v-9h-9V8H14v9.7Zm3.7-3.675v-9H8v-.7h9.7v9.7Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUpW100Filled.displayName = 'AmauiIconMaterialArrowsMoreUpW100Filled';

export default IconMaterialArrowsMoreUpW100Filled;
