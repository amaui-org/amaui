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
      <path d="M160 976H80v-80h80v80ZM80 816v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM240 816V176h640v640H240Zm80-80h480V416H520V256H320v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicate.displayName = 'AmauiIconMaterialTabDuplicate';

export default IconMaterialTabDuplicate;
