import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelSharpFilled'
      short_name='Label'

      {...props}
    >
      <path d="M3 19V5H16.05L21 12L16.05 19Z"/>
    </Icon>
  );
});

IconMaterialLabelSharpFilled.displayName = 'AmauiIconMaterialLabelSharpFilled';

export default IconMaterialLabelSharpFilled;
