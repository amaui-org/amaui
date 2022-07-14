import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelSharpFilled'
      short_name='NewLabel'

      {...props}
    >
      <path d="M12 19V13H9V10H3V5H16.05L21 12L16.05 19ZM5 20V17H2V15H5V12H7V15H10V17H7V20Z"/>
    </Icon>
  );
});

export default IconMaterialNewLabelSharpFilled;
