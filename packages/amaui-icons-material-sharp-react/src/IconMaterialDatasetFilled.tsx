import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetFilled'

      short_name='Dataset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm4-10h4V7H7Zm6 0h4V7h-4Zm-6 6h4v-4H7Zm6 0h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialDatasetFilled.displayName = 'AmauiIconMaterialDatasetFilled';

export default IconMaterialDatasetFilled;
