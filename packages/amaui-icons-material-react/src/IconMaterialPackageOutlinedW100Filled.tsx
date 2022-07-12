import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageOutlinedW100Filled'
      short_name='Package'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM7 16.35h5v-.7H7Zm2.3-4.7L12 10.3l2.7 1.35V5H9.3Z"/>
    </Icon>
  )
});

export default IconMaterialPackageOutlinedW100Filled;
