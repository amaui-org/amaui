import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAll'

      short_name='SelectAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5V3h2v2Zm0 8v-2h2v2Zm4 8v-2h2v2ZM3 9V7h2v2Zm8-4V3h2v2Zm8 0V3h2v2ZM3 21v-2h2v2Zm0-4v-2h2v2ZM7 5V3h2v2Zm4 16v-2h2v2Zm8-8v-2h2v2Zm0 8v-2h2v2Zm0-12V7h2v2Zm0 8v-2h2v2Zm-4 4v-2h2v2Zm0-16V3h2v2ZM7 17V7h10v10Zm2-2h6V9H9Z"/>
    </Icon>
  );
});

IconMaterialSelectAll.displayName = 'AmauiIconMaterialSelectAll';

export default IconMaterialSelectAll;
