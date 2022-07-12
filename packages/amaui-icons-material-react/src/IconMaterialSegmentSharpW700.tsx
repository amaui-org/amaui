import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentSharpW700'
      short_name='Segment'

      {...props}
    >
      <path d="M8.425 19.35V16.2H21.575V19.35ZM2.425 7.8V4.65H21.575V7.8ZM8.425 13.575V10.425H21.575V13.575Z"/>
    </Icon>
  )
});

export default IconMaterialSegmentSharpW700;
