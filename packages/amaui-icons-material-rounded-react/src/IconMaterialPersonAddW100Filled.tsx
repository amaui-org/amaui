import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddW100Filled'

      short_name='PersonAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.675 13.35q-.15 0-.25-.1t-.1-.25v-2.65h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V13q0 .15-.1.25t-.25.1Zm-10-2.15q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q7.55 5.8 8.675 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-5.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.337-1.037.338-.488.913-.763 1.375-.65 2.738-.975 1.362-.325 2.712-.325t2.712.325q1.363.325 2.738.975.575.275.913.763.337.487.337 1.037v.55q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialPersonAddW100Filled.displayName = 'AmauiIconMaterialPersonAddW100Filled';

export default IconMaterialPersonAddW100Filled;
