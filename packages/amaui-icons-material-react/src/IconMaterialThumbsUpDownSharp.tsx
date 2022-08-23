import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownSharp'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M0 14V5.4L5.4 0L6.625 1.225L5.8 5H12V7.575L9.275 14ZM2 12H7.95L10 7.15V7H3.35L3.95 4.3L2 6.2ZM18.6 24 17.375 22.775 18.2 19H12V16.425L14.725 10H24V18.6ZM20.05 19.7 22 17.8V12H16.05L14 16.85V17H20.65ZM2 12V6.2V7V7.15V12ZM22 17.8V17V16.85V12V17.8Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownSharp.displayName = 'AmauiIconMaterialThumbsUpDownSharp';

export default IconMaterialThumbsUpDownSharp;
