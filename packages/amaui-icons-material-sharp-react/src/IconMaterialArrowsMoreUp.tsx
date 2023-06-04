import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUp'

      short_name='ArrowsMoreUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19v-9H3V8h11v11Zm5-5V5H8V3h11v11Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUp.displayName = 'AmauiIconMaterialArrowsMoreUp';

export default IconMaterialArrowsMoreUp;
