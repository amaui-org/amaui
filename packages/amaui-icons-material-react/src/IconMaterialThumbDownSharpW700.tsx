import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownSharpW700'
      short_name='ThumbDown'

      {...props}
    >
      <path d="M9.875 23.3 7.35 20.9 8.4 16.675H-0.5V13.075L3.875 2.725H17.5V16.35ZM14.35 5.85H5.95L2.725 13.525H12.475L11.425 17.65L14.35 14.95ZM19.5 14.95H24.275V2.7H19.5ZM14.35 5.85V14.95V13.525V5.85Z"/>
    </Icon>
  )
});

export default IconMaterialThumbDownSharpW700;
