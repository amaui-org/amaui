import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexStart'

      short_name='AlignFlexStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 256v-80h800v80H80Zm340 640V336h120v560H420Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexStart.displayName = 'AmauiIconMaterialAlignFlexStart';

export default IconMaterialAlignFlexStart;
