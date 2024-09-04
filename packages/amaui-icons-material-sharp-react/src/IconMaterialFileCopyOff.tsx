import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOff'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m840-234-80-80v-326H560v-200H320v86l-80-80v-86h360l240 240v446Zm-520-46h248L320-528v248ZM820-28 648-200H240v-408L28-820l56-56L876-84l-56 56ZM540-577Zm-96 173ZM80-40v-600h80v520h480v80H80Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOff.displayName = 'AmauiIconMaterialFileCopyOff';

export default IconMaterialFileCopyOff;
