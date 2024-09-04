import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabInactiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabInactiveW100Filled'

      short_name='TabInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-132v-148H132v-124h28v96h120v-372h372v-120h-96v-28h124v148h148v548H280ZM132-504v-100h28v100h-28Zm0-200v-124h124v28h-96v96h-28Zm224-96v-28h100v28H356Z"/>
    </Icon>
  );
});

IconMaterialTabInactiveW100Filled.displayName = 'AmauiIconMaterialTabInactiveW100Filled';

export default IconMaterialTabInactiveW100Filled;
