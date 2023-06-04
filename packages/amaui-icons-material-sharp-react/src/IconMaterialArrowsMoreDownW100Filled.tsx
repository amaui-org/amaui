import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownW100Filled'

      short_name='ArrowsMoreDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.7V10H7v9h9v.7Zm3.7-3.675v-9.7h.7v9h9v.7Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDownW100Filled.displayName = 'AmauiIconMaterialArrowsMoreDownW100Filled';

export default IconMaterialArrowsMoreDownW100Filled;
