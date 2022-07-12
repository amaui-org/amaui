import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistRtlOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlOutlinedFilled'
      short_name='ChecklistRtl'

      {...props}
    >
      <path d="M2 9V7H11V9ZM2 17V15H11V17ZM16.375 11 12.825 7.45 14.225 6.05 16.35 8.175 20.6 3.925 22 5.35ZM16.375 19 12.825 15.45 14.225 14.05 16.35 16.175 20.6 11.925 22 13.35Z"/>
    </Icon>
  )
});

export default IconMaterialChecklistRtlOutlinedFilled;
