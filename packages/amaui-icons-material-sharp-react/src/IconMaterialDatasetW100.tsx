import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetW100'

      short_name='Dataset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Zm2.65-8.65h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7Zm-6 6h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7Z"/>
    </Icon>
  );
});

IconMaterialDatasetW100.displayName = 'AmauiIconMaterialDatasetW100';

export default IconMaterialDatasetW100;
