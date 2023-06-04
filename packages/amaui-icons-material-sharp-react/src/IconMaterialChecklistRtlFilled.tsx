import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklistRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlFilled'

      short_name='ChecklistRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17v-2h9v2Zm0-8V7h9v2Zm14.375 10-3.55-3.55 1.4-1.4 2.125 2.125 4.25-4.25L22 13.35Zm0-8-3.55-3.55 1.4-1.4 2.125 2.125 4.25-4.25L22 5.35Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlFilled.displayName = 'AmauiIconMaterialChecklistRtlFilled';

export default IconMaterialChecklistRtlFilled;
