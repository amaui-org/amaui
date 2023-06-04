import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyW100'

      short_name='OverviewKey'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 804V348h456v456H80Zm28-28h400V376H108v400Zm572 28V348h28v456h-28Zm172 0V348h28v456h-28Zm-744-28V376v400Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyW100.displayName = 'AmauiIconMaterialOverviewKeyW100';

export default IconMaterialOverviewKeyW100;
