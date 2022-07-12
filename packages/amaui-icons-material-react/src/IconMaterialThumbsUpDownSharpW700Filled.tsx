import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownSharpW700Filled'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M0 14.8V5.775L5.775 0L7.425 1.65L6.65 5.15H12.275V8.725L9.575 14.8ZM18.225 24 16.575 22.35 17.35 18.85H11.725V15.275L14.45 9.2H24V18.225Z"/>
    </Icon>
  )
});

export default IconMaterialThumbsUpDownSharpW700Filled;
