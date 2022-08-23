import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeSharp'
      short_name='Cake'

      {...props}
    >
      <path d="M3 22V14H5V8H11V6.55Q10.55 6.25 10.275 5.825Q10 5.4 10 4.8Q10 4.425 10.15 4.062Q10.3 3.7 10.6 3.4L12 2L13.4 3.4Q13.7 3.7 13.85 4.062Q14 4.425 14 4.8Q14 5.4 13.725 5.825Q13.45 6.25 13 6.55V8H19V14H21V22ZM7 14H17V10H7ZM5 20H19V16H5ZM7 14H17ZM5 20H19ZM19 14H5H19Z"/>
    </Icon>
  );
});

IconMaterialCakeSharp.displayName = 'AmauiIconMaterialCakeSharp';

export default IconMaterialCakeSharp;
