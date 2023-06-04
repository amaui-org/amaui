import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAssetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetW100Filled'

      short_name='WebAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V8H4v9.2q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialWebAssetW100Filled.displayName = 'AmauiIconMaterialWebAssetW100Filled';

export default IconMaterialWebAssetW100Filled;
