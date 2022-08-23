import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffSharpFilled'
      short_name='ThumbDownOff'

      {...props}
    >
      <path d="M9.825 23 8.175 21.35 9.3 16H-0.025V14L4.675 3H17V15.825ZM19 15H23V3H19Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOffSharpFilled.displayName = 'AmauiIconMaterialThumbDownOffSharpFilled';

export default IconMaterialThumbDownOffSharpFilled;
