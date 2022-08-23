import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffSharpW100Filled'
      short_name='LabelOff'

      {...props}
    >
      <path d="M18.3 21.1 14.9 17.7H4.3V7.1L2.4 5.2L2.9 4.7L18.8 20.6ZM16.75 15.7 7.3 6.3H15.375L19.4 12Z"/>
    </Icon>
  );
});

IconMaterialLabelOffSharpW100Filled.displayName = 'AmauiIconMaterialLabelOffSharpW100Filled';

export default IconMaterialLabelOffSharpW100Filled;
