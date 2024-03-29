import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mp'

      short_name='Mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 15H15v-1.5h3V9h-4.5Zm1.5-3v-1.5h1.5V12Zm-9 3h1.5v-4.5h1v3H10v-3h1V15h1.5V9H6Zm-3 6V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialMp.displayName = 'AmauiIconMaterialMp';

export default IconMaterialMp;
