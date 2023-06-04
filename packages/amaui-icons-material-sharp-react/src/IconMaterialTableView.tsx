import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableView = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableView'

      short_name='TableView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21V7h14v14Zm2-10h10V9H9Zm4 4h2v-2h-2Zm0 4h2v-2h-2Zm-4-4h2v-2H9Zm8 0h2v-2h-2Zm-8 4h2v-2H9Zm8 0h2v-2h-2ZM3 17V3h14v3h-2V5H5v10h1v2Z"/>
    </Icon>
  );
});

IconMaterialTableView.displayName = 'AmauiIconMaterialTableView';

export default IconMaterialTableView;
