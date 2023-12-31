import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeImprovementAndTools = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeImprovementAndTools'

      short_name='HomeImprovementAndTools'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-880h480L600-712v512L480-80 360-200v-512L240-880Zm200 320h80v-176l40-64H400l40 64v176Zm80 80h-80v80h80v-80Zm0 240v-80h-80v80l40 40 40-40Zm-40-320Zm0 160Zm0-160Zm0 80Zm0 160Z"/>
    </Icon>
  );
});

IconMaterialHomeImprovementAndTools.displayName = 'AmauiIconMaterialHomeImprovementAndTools';

export default IconMaterialHomeImprovementAndTools;
