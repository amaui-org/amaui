import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbShadeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeSharpW100'
      short_name='WbShade'

      {...props}
    >
      <path d="M19.175 19 13.925 13.75V12.75L20.175 19ZM13.925 19V17L15.925 19ZM4.925 19V9.5H3.825L7.925 5.4L12.025 9.5H10.925V19ZM6.225 14.7H9.625V9.5H6.225Z"/>
    </Icon>
  );
});

IconMaterialWbShadeSharpW100.displayName = 'AmauiIconMaterialWbShadeSharpW100';

export default IconMaterialWbShadeSharpW100;
