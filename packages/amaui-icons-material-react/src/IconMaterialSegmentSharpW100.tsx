import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentSharpW100'
      short_name='Segment'

      {...props}
    >
      <path d="M9.65 17.35V16.65H20.35V17.35ZM3.65 7.35V6.65H20.35V7.35ZM9.65 12.35V11.65H20.35V12.35Z"/>
    </Icon>
  );
});

IconMaterialSegmentSharpW100.displayName = 'AmauiIconMaterialSegmentSharpW100';

export default IconMaterialSegmentSharpW100;
