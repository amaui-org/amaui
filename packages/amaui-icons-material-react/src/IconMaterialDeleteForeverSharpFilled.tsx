import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteForeverSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverSharpFilled'
      short_name='DeleteForever'

      {...props}
    >
      <path d="M9.4 16.5 12 13.9 14.6 16.5 16 15.1 13.4 12.5 16 9.9 14.6 8.5 12 11.1 9.4 8.5 8 9.9 10.6 12.5 8 15.1ZM5 21V6H4V4H9V3H15V4H20V6H19V21Z"/>
    </Icon>
  );
});

export default IconMaterialDeleteForeverSharpFilled;
