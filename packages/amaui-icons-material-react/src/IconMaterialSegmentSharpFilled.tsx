import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentSharpFilled'
      short_name='Segment'

      {...props}
    >
      <path d="M9 18V16H21V18ZM3 8V6H21V8ZM9 13V11H21V13Z"/>
    </Icon>
  );
});

export default IconMaterialSegmentSharpFilled;
