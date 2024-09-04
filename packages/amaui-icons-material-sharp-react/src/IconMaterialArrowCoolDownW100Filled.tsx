import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCoolDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCoolDownW100Filled'

      short_name='ArrowCoolDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132 234-378l19-20 213 213v-284h28v285l213-213 19 19-246 246Zm-14-417v-120h28v120h-28Zm0-200v-80h28v80h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowCoolDownW100Filled.displayName = 'AmauiIconMaterialArrowCoolDownW100Filled';

export default IconMaterialArrowCoolDownW100Filled;
