import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandTwoTone'
      short_name='Expand'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M4,20h16v2H4V20z M4,2h16v2H4V2z M13,9h3l-4-4L8,9h3v6H8l4,4l4-4h-3V9z"/></g>
    </Icon>
  );
});

export default IconMaterialExpandTwoTone;
