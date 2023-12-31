import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckedBag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBag'

      short_name='CheckedBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h800v80H80Zm80-160v-440h200q0-50 35-85t85-35q50 0 85 35t35 85h200v440H160Zm520-80h40v-280h-40v280ZM420-720h120q0-26-17-43t-43-17q-26 0-43 17t-17 43ZM280-360v-280h-40v280h40Zm60-280v280h280v-280H340Zm-60 280h60-60Zm400 0h-60 60Zm-400 0h-40 40Zm60 0h280-280Zm340 0h40-40Z"/>
    </Icon>
  );
});

IconMaterialCheckedBag.displayName = 'AmauiIconMaterialCheckedBag';

export default IconMaterialCheckedBag;
