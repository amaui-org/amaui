import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDehazeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeSharpW100'
      short_name='Dehaze'

      {...props}
    >
      <path d="M2.65 17.05V16.35H21.35V17.05ZM2.65 12.35V11.65H21.35V12.35ZM2.65 7.65V6.95H21.35V7.65Z"/>
    </Icon>
  );
});

IconMaterialDehazeSharpW100.displayName = 'AmauiIconMaterialDehazeSharpW100';

export default IconMaterialDehazeSharpW100;
