import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownSharp'
      short_name='ThumbDown'

      {...props}
    >
      <path d="M9.825 23 8.175 21.35 9.3 16H-0.025V14L4.675 3H17V15.825ZM15 5H6L2.15 14H11.775L10.65 19.35L15 15ZM19 15H23V3H19ZM15 5V15V14V5Z"/>
    </Icon>
  );
});

IconMaterialThumbDownSharp.displayName = 'AmauiIconMaterialThumbDownSharp';

export default IconMaterialThumbDownSharp;
