import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelSharp'
      short_name='Label'

      {...props}
    >
      <path d="M3 19V5H16.05L21 12L16.05 19ZM5 17H15L18.55 12L15 7H5ZM5 7V12V17Z"/>
    </Icon>
  );
});

export default IconMaterialLabelSharp;
