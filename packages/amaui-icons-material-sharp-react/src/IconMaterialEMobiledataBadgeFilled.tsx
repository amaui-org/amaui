import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeFilled'

      short_name='EMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776h320v-80H400v-80h200v-80H400v-80h240v-80H320v400ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeFilled.displayName = 'AmauiIconMaterialEMobiledataBadgeFilled';

export default IconMaterialEMobiledataBadgeFilled;
