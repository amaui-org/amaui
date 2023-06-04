import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetW100Filled'

      short_name='VideogameAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 16.7V7.3h17.4v9.4Zm4.35-2.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Zm6.85 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm3-3q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetW100Filled.displayName = 'AmauiIconMaterialVideogameAssetW100Filled';

export default IconMaterialVideogameAssetW100Filled;
