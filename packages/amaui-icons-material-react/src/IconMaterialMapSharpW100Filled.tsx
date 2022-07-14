import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapSharpW100Filled'
      short_name='Map'

      {...props}
    >
      <path d="M15 19.6 9 17.5 4.3 19.325V6L9 4.4L15 6.5L19.7 4.675V18.075ZM14.65 18.75V7.05L9.35 5.2V16.9Z"/>
    </Icon>
  );
});

export default IconMaterialMapSharpW100Filled;
