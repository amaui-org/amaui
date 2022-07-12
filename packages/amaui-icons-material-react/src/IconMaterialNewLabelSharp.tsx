import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelSharp'
      short_name='NewLabel'

      {...props}
    >
      <path d="M12 19V17H15L18.55 12L15 7H5V10H3V5H16.05L21 12L16.05 19ZM11.775 12ZM5 20V17H2V15H5V12H7V15H10V17H7V20Z"/>
    </Icon>
  )
});

export default IconMaterialNewLabelSharp;
