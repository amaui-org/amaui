import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyFilled'

      short_name='OverviewKey'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 856V296h560v560H40Zm640 0V296h80v560h-80Zm160 0V296h80v560h-80Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyFilled.displayName = 'AmauiIconMaterialOverviewKeyFilled';

export default IconMaterialOverviewKeyFilled;
