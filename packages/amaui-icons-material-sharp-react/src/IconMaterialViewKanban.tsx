import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewKanban = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanban'

      short_name='ViewKanban'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h2V7H7Zm4-5h2V7h-2Zm4 3h2V7h-2ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialViewKanban.displayName = 'AmauiIconMaterialViewKanban';

export default IconMaterialViewKanban;
