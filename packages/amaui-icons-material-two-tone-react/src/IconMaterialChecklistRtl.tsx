import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklistRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtl'

      short_name='ChecklistRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M11,7H2v2h9V7z M11,15H2v2h9V15z M16.34,11l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,5.34L16.34,11z M16.34,19 l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,13.34L16.34,19z"/>
    </Icon>
  );
});

IconMaterialChecklistRtl.displayName = 'AmauiIconMaterialChecklistRtl';

export default IconMaterialChecklistRtl;
