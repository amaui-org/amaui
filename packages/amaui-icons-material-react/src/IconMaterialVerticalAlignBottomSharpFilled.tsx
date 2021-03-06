import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottomSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomSharpFilled'
      short_name='VerticalAlignBottom'

      {...props}
    >
      <path d="M4 21V19H20V21ZM12 17 7 12 8.4 10.6 11 13.2V3H13V13.2L15.6 10.6L17 12Z"/>
    </Icon>
  );
});

export default IconMaterialVerticalAlignBottomSharpFilled;
