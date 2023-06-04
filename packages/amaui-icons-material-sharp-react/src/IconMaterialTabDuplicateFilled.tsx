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
      <path d="M160 976H80v-80h80v80ZM80 816v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM240 816V176h640v640H240Zm280-400h280V256H520v160Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateFilled.displayName = 'AmauiIconMaterialTabDuplicateFilled';

export default IconMaterialTabDuplicateFilled;
