import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighlightOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightOutlinedW700Filled'
      short_name='Highlight'

      {...props}
    >
      <path d="M4.8 7.725 2.125 5.1 4.325 2.85 7 5.525ZM10.425 4.625V0.85H13.575V4.625ZM19.25 7.725 17.025 5.525 19.675 2.85 21.875 5.1ZM7.85 23.45V17.775L4.85 14.775V8.475H19.15V14.775L16.15 17.775V23.45Z"/>
    </Icon>
  )
});

export default IconMaterialHighlightOutlinedW700Filled;
