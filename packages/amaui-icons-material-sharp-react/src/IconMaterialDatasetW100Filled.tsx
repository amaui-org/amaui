import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetW100Filled'

      short_name='Dataset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm3.35-9.35h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7Zm-6 6h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7Z"/>
    </Icon>
  );
});

IconMaterialDatasetW100Filled.displayName = 'AmauiIconMaterialDatasetW100Filled';

export default IconMaterialDatasetW100Filled;
