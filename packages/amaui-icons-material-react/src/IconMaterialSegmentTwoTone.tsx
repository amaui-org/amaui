import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentTwoTone'
      short_name='Segment'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M9,18h12v-2H9V18z M3,6v2h18V6H3z M9,13h12v-2H9V13z"/></g>
    </Icon>
  )
});

export default IconMaterialSegmentTwoTone;
