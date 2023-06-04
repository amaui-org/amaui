import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumn'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19V5h17.975v14Zm2-2h3.325V7H5Zm5.325 0h3.325V7h-3.325Zm5.325 0h3.325V7H15.65Z"/>
    </Icon>
  );
});

IconMaterialViewColumn.displayName = 'AmauiIconMaterialViewColumn';

export default IconMaterialViewColumn;
