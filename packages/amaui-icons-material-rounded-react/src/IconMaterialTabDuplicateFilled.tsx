import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabDuplicateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicateFilled'

      short_name='TabDuplicate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976q-33 0-56.5-23.5T80 896h80v80ZM80 816v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160q0-33 23.5-56.5T160 256v80H80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80q0 33-23.5 56.5T720 976ZM320 816q-33 0-56.5-23.5T240 736V256q0-33 23.5-56.5T320 176h480q33 0 56.5 23.5T880 256v480q0 33-23.5 56.5T800 816H320Zm480-400V256H520v120q0 17 11.5 28.5T560 416h240Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateFilled.displayName = 'AmauiIconMaterialTabDuplicateFilled';

export default IconMaterialTabDuplicateFilled;
