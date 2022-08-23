import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownSharpW100Filled'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M0.65 13.05V5.4L5.4 0.65L5.95 1.2L5 5.35H11.35V7.225L8.8 13.05ZM18.6 23.35 18.05 22.8 19 18.65H12.65V16.775L15.2 10.95H23.35V18.6Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownSharpW100Filled.displayName = 'AmauiIconMaterialThumbsUpDownSharpW100Filled';

export default IconMaterialThumbsUpDownSharpW100Filled;
