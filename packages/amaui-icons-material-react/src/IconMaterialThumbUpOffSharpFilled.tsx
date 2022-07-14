import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffSharpFilled'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M7 21V8.175L14.175 1L15.825 2.65L14.7 8H24.025V10L19.325 21ZM1 21H5V9H1Z"/>
    </Icon>
  );
});

export default IconMaterialThumbUpOffSharpFilled;
