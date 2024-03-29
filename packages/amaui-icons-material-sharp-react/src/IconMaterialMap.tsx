import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Map'

      short_name='Map'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 21-6-2.1-6 2.325V5.05L9 3l6 2.1 6-2.325V18.95Zm-1-2.45V6.85l-4-1.4v11.7Zm2 0 3-1V5.7l-3 1.15ZM5 18.3l3-1.15V5.45l-3 1ZM16 6.85v11.7Zm-8-1.4v11.7Z"/>
    </Icon>
  );
});

IconMaterialMap.displayName = 'AmauiIconMaterialMap';

export default IconMaterialMap;
