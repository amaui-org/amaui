import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCopyAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAll'

      short_name='CopyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18V2h13v16Zm2-2h9V4H9Zm-6-1h2v-2H3Zm0-3.5h2v-2H3ZM10 22h2v-2h-2Zm-7-3.5h2v-2H3ZM3 22h2v-2H3Zm3.5 0h2v-2h-2Zm7 0h2v-2h-2ZM3 8h2V6H3Z"/>
    </Icon>
  );
});

IconMaterialCopyAll.displayName = 'AmauiIconMaterialCopyAll';

export default IconMaterialCopyAll;
