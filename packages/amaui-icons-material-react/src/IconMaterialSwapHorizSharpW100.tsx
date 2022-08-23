import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapHorizSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizSharpW100'
      short_name='SwapHoriz'

      {...props}
    >
      <path d="M17 13.1 16.5 12.6 19.75 9.35H11.65V8.65H19.75L16.5 5.4L17 4.9L21.1 9ZM7 19.1 2.9 15 7 10.9 7.5 11.4 4.25 14.65H12.35V15.35H4.25L7.5 18.6Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizSharpW100.displayName = 'AmauiIconMaterialSwapHorizSharpW100';

export default IconMaterialSwapHorizSharpW100;
