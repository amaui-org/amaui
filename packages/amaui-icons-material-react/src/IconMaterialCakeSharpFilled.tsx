import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeSharpFilled'
      short_name='Cake'

      {...props}
    >
      <path d="M5 13V8H11V6.55Q10.55 6.25 10.275 5.825Q10 5.4 10 4.8Q10 4.425 10.15 4.062Q10.3 3.7 10.6 3.4L12 2L13.4 3.4Q13.7 3.7 13.85 4.062Q14 4.425 14 4.8Q14 5.4 13.725 5.825Q13.45 6.25 13 6.55V8H19V13ZM3 22V15H21V22Z"/>
    </Icon>
  );
});

IconMaterialCakeSharpFilled.displayName = 'AmauiIconMaterialCakeSharpFilled';

export default IconMaterialCakeSharpFilled;
