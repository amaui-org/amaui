import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffSharp'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M7 21V8.175L14.175 1L15.825 2.65L14.7 8H24.025V10L19.325 21ZM9 19H18L21.85 10H12.225L13.35 4.65L9 9ZM1 21H5V9H1ZM9 19V9V10V19Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOffSharp.displayName = 'AmauiIconMaterialThumbUpOffSharp';

export default IconMaterialThumbUpOffSharp;
