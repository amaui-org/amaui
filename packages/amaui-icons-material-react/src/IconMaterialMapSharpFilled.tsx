import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapSharpFilled'
      short_name='Map'

      {...props}
    >
      <path d="M15 21 9 18.9 3 21.225V5.05L9 3L15 5.1L21 2.775V18.95ZM14 18.55V6.85L10 5.45V17.15Z"/>
    </Icon>
  )
});

export default IconMaterialMapSharpFilled;
