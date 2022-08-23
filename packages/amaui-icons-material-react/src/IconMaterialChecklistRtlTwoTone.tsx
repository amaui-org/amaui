import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistRtlTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlTwoTone'
      short_name='ChecklistRtl'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M11,7H2v2h9V7z M11,15H2v2h9V15z M16.34,11l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,5.34L16.34,11z M16.34,19 l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,13.34L16.34,19z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlTwoTone.displayName = 'AmauiIconMaterialChecklistRtlTwoTone';

export default IconMaterialChecklistRtlTwoTone;
