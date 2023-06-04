import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKey'

      short_name='OverviewKey'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 856V296h560v560H40Zm80-80h400V376H120v400Zm560 80V296h80v560h-80Zm160 0V296h80v560h-80Zm-720-80V376v400Z"/>
    </Icon>
  );
});

IconMaterialOverviewKey.displayName = 'AmauiIconMaterialOverviewKey';

export default IconMaterialOverviewKey;
