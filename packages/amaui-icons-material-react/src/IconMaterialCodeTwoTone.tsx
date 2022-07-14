import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeTwoTone'
      short_name='Code'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </Icon>
  );
});

export default IconMaterialCodeTwoTone;
