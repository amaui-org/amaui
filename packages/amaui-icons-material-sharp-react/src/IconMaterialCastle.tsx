import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Castle'

      short_name='Castle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V9h2v2h2V3h2v2h2V3h2v2h2V3h2v2h2V3h2v8h2V9h2v12h-9v-5h-4v5Zm2-2h5v-5h8v5h5v-6h-4V7H7v6H3Zm6-7h2V9H9Zm4 0h2V9h-2Zm-1 1Z"/>
    </Icon>
  );
});

IconMaterialCastle.displayName = 'AmauiIconMaterialCastle';

export default IconMaterialCastle;
