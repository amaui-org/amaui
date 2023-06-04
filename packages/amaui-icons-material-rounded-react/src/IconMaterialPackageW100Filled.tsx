import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageW100Filled'

      short_name='Package'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm4.05-8.325L12 10.3l2.15 1.075q.2.1.375-.012.175-.113.175-.313V5H9.3v6.05q0 .2.175.313.175.112.375.012Zm-2.5 4.975h4.3q.15 0 .25-.1T12 16q0-.15-.1-.25t-.25-.1h-4.3q-.15 0-.25.1T7 16q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialPackageW100Filled.displayName = 'AmauiIconMaterialPackageW100Filled';

export default IconMaterialPackageW100Filled;
