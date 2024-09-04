import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCoolDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCoolDownFilled'

      short_name='ArrowCoolDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 200-360l56-57 184 184v-287h80v287l184-183 56 56L480-80Zm-40-520v-120h80v120h-80Zm0-200v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowCoolDownFilled.displayName = 'AmauiIconMaterialArrowCoolDownFilled';

export default IconMaterialArrowCoolDownFilled;
