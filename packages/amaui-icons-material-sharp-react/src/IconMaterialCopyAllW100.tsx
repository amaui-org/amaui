import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCopyAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllW100'

      short_name='CopyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 17.35V2.65h11.7v14.7Zm.7-.7h10.3V3.35H8.35Zm-4.7-2h.7v-2h-.7Zm0-4h.7v-2h-.7Zm6.7 10.7h2v-.7h-2Zm-6.7-2.7h.7v-2h-.7Zm0 2.7h.7v-.7h-.7Zm2.7 0h2v-.7h-2Zm8 0h.7v-.7h-.7ZM3.65 6.65h.7v-.7h-.7Z"/>
    </Icon>
  );
});

IconMaterialCopyAllW100.displayName = 'AmauiIconMaterialCopyAllW100';

export default IconMaterialCopyAllW100;
