import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveFilled'

      short_name='Hive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.275 11.5-1.7-3 1.7-3h3.35l1.7 3-1.7 3Zm-5.95 3.5-1.7-3 1.7-3h3.35l1.7 3-1.7 3Zm0-7-1.7-3 1.7-3h3.35l1.7 3-1.7 3Zm-5.95 3.5-1.7-3 1.7-3h3.35l1.625 3-1.625 3Zm0 7-1.7-3 1.7-3h3.35l1.625 3-1.625 3Zm6.05 3.5-1.8-3 1.7-3h3.35l1.7 3-1.7 3Zm5.85-3.5-1.7-3 1.7-3h3.35l1.7 3-1.7 3Z"/>
    </Icon>
  );
});

IconMaterialHiveFilled.displayName = 'AmauiIconMaterialHiveFilled';

export default IconMaterialHiveFilled;
