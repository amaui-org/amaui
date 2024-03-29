import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbsUpDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDown'

      short_name='ThumbsUpDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 14V5.4L5.4 0l1.225 1.225L5.8 5H12v2.575L9.275 14Zm2-2h5.95L10 7.15V7H3.35l.6-2.7L2 6.2Zm16.6 12-1.225-1.225L18.2 19H12v-2.575L14.725 10H24v8.6Zm1.45-4.3L22 17.8V12h-5.95L14 16.85V17h6.65ZM2 12V6.2 12Zm20 5.8V12v5.8Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDown.displayName = 'AmauiIconMaterialThumbsUpDown';

export default IconMaterialThumbsUpDown;
