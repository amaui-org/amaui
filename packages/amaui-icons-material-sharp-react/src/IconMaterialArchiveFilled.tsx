import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveFilled'

      short_name='Archive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V5.8L5.3 3h13.4L21 5.8V21ZM5.4 6h13.2l-.85-1H6.25ZM12 18l4-4-1.4-1.4-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14Z"/>
    </Icon>
  );
});

IconMaterialArchiveFilled.displayName = 'AmauiIconMaterialArchiveFilled';

export default IconMaterialArchiveFilled;
