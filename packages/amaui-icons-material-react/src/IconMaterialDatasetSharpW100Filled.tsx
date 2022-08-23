import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatasetSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetSharpW100Filled'
      short_name='Dataset'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM7.65 10.35H10.35V7.65H7.65ZM13.65 10.35H16.35V7.65H13.65ZM7.65 16.35H10.35V13.65H7.65ZM13.65 16.35H16.35V13.65H13.65Z"/>
    </Icon>
  );
});

IconMaterialDatasetSharpW100Filled.displayName = 'AmauiIconMaterialDatasetSharpW100Filled';

export default IconMaterialDatasetSharpW100Filled;
