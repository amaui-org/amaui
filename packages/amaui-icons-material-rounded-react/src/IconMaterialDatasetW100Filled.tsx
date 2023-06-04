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
      <path d="M7.65 16.35h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7Zm-6-6h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialDatasetW100Filled.displayName = 'AmauiIconMaterialDatasetW100Filled';

export default IconMaterialDatasetW100Filled;
