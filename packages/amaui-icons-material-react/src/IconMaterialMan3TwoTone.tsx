import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3TwoTone'
      short_name='Man3'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14,7h-4C8.9,7,8,7.9,8,9v6h2v7h4v-7h2V9C16,7.9,15.1,7,14,7z"/><rect height="3.18" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)" width="3.18" x="10.41" y="2.41"/></g></g>
    </Icon>
  )
});

export default IconMaterialMan3TwoTone;
