import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSave = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSave'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM160-160v-720h360l240 240v121h-80v-81H480v-200H240v560h240v80H160Zm80-80v-560 560Z"/>
    </Icon>
  );
});

IconMaterialFileSave.displayName = 'AmauiIconMaterialFileSave';

export default IconMaterialFileSave;
