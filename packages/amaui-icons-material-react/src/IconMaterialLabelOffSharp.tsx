import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffSharp'
      short_name='LabelOff'

      {...props}
    >
      <path d="M18.45 15.6 17 14.15 18.55 12 15 7H9.85L7.85 5H16.05L21 12ZM19.8 22.6 16.2 19H3V5.8L1.4 4.2L2.8 2.8L21.2 21.2ZM9.575 12.4ZM13.425 10.575ZM14.2 17 5 7.8V17Z"/>
    </Icon>
  );
});

IconMaterialLabelOffSharp.displayName = 'AmauiIconMaterialLabelOffSharp';

export default IconMaterialLabelOffSharp;
