import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklistRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlW100'

      short_name='ChecklistRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 15.85v-.7H11v.7Zm0-7v-.7H11v.7Zm12.725 8.725L13.4 14.95l.475-.475L16 16.6l4.25-4.25.475.5Zm0-7L13.4 7.95l.475-.475L16 9.6l4.25-4.25.475.5Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlW100.displayName = 'AmauiIconMaterialChecklistRtlW100';

export default IconMaterialChecklistRtlW100;
