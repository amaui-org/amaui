import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffSharpFilled'
      short_name='LabelOff'

      {...props}
    >
      <path d="M19.8 22.6 16.2 19H3V5.8L1.4 4.2L2.8 2.8L21.2 21.2ZM18.45 15.6 7.85 5H16.05L21 12Z"/>
    </Icon>
  );
});

export default IconMaterialLabelOffSharpFilled;
