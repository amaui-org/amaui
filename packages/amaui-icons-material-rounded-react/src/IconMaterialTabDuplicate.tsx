import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabDuplicate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicate'

      short_name='TabDuplicate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976q-33 0-56.5-23.5T80 896h80v80ZM80 816v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160q0-33 23.5-56.5T160 256v80H80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80q0 33-23.5 56.5T720 976ZM320 816q-33 0-56.5-23.5T240 736V256q0-33 23.5-56.5T320 176h480q33 0 56.5 23.5T880 256v480q0 33-23.5 56.5T800 816H320Zm0-80h480V416H560q-17 0-28.5-11.5T520 376V256H320v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicate.displayName = 'AmauiIconMaterialTabDuplicate';

export default IconMaterialTabDuplicate;
