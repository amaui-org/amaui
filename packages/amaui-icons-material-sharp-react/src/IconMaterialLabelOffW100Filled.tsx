import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffW100Filled'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.3 21.1-3.4-3.4H4.3V7.1L2.4 5.2l.5-.5 15.9 15.9Zm-1.55-5.4L7.3 6.3h8.075L19.4 12Z"/>
    </Icon>
  );
});

IconMaterialLabelOffW100Filled.displayName = 'AmauiIconMaterialLabelOffW100Filled';

export default IconMaterialLabelOffW100Filled;
