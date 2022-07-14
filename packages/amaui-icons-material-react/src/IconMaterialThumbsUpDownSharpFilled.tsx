import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownSharpFilled'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M0 14V5.4L5.4 0L6.625 1.225L5.8 5H12V7.575L9.275 14ZM18.6 24 17.375 22.775 18.2 19H12V16.425L14.725 10H24V18.6Z"/>
    </Icon>
  );
});

export default IconMaterialThumbsUpDownSharpFilled;
