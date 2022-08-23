import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffSharpW100'
      short_name='ThumbDownOff'

      {...props}
    >
      <path d="M9.6 20.65 9.025 20.075 10.1 14.7H0.6V14L4.7 4.3H15.65V14.7ZM14.95 5H5.175L1.35 14H10.95L9.85 19.45L14.95 14.4ZM18.15 14.175H22.5V4.3H18.15ZM14.95 5V14.4V14V5Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOffSharpW100.displayName = 'AmauiIconMaterialThumbDownOffSharpW100';

export default IconMaterialThumbDownOffSharpW100;
