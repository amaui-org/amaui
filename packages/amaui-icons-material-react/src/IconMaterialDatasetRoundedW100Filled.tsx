import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatasetRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetRoundedW100Filled'
      short_name='Dataset'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM7.65 10.35H10.35V7.65H7.65ZM13.65 10.35H16.35V7.65H13.65ZM7.65 16.35H10.35V13.65H7.65ZM13.65 16.35H16.35V13.65H13.65Z"/>
    </Icon>
  );
});

IconMaterialDatasetRoundedW100Filled.displayName = 'AmauiIconMaterialDatasetRoundedW100Filled';

export default IconMaterialDatasetRoundedW100Filled;
