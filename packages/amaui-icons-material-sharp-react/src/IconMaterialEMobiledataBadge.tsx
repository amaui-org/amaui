import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadge'

      short_name='EMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776h320v-80H400v-80h200v-80H400v-80h240v-80H320v400ZM120 936V216h720v720H120Zm80-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadge.displayName = 'AmauiIconMaterialEMobiledataBadge';

export default IconMaterialEMobiledataBadge;
