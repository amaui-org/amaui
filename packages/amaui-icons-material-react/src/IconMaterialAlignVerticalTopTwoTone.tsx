import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopTwoTone'
      short_name='AlignVerticalTop'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z"/>
    </Icon>
  )
});

export default IconMaterialAlignVerticalTopTwoTone;
