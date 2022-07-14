import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLabelSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelSharpW100'
      short_name='VideoLabel'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM4 15H20V6H4Z"/>
    </Icon>
  );
});

export default IconMaterialVideoLabelSharpW100;
