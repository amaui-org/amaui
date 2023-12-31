import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConciergeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConciergeFilled'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-440h160v-440H40v440Zm240 0h79l321-120v-80H520l-70 27-14-37 84-30h360v-80L560-880l-280 79v361ZM400-80h520v-80H400v80Zm40-120h440q0-81-51.5-141.5T700-416v-65h-80v65q-78 14-129 74.5T440-200Z"/>
    </Icon>
  );
});

IconMaterialConciergeFilled.displayName = 'AmauiIconMaterialConciergeFilled';

export default IconMaterialConciergeFilled;
