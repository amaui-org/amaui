import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpSharpFilled'
      short_name='ArrowsMoreUp'

      {...props}
    >
      <path d="M12 19v-9H3V8h11v11Zm5-5V5H8V3h11v11Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUpSharpFilled.displayName = 'AmauiIconMaterialArrowsMoreUpSharpFilled';

export default IconMaterialArrowsMoreUpSharpFilled;
