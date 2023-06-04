import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownFilled'

      short_name='ThumbsUpDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 14V5.4L5.4 0l1.225 1.225L5.8 5H12v2.575L9.275 14Zm18.6 10-1.225-1.225L18.2 19H12v-2.575L14.725 10H24v8.6Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownFilled.displayName = 'AmauiIconMaterialThumbsUpDownFilled';

export default IconMaterialThumbsUpDownFilled;
