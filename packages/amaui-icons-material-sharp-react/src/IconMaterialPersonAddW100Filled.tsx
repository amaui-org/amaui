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
      <path d="M18.325 13.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-9.65-2.15q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q7.55 5.8 8.675 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.55.337-1.037.338-.488.913-.763 1.375-.65 2.738-.975 1.362-.325 2.712-.325t2.712.325q1.363.325 2.738.975.575.275.913.763.337.487.337 1.037v1.3Z"/>
    </Icon>
  );
});

IconMaterialPersonAddW100Filled.displayName = 'AmauiIconMaterialPersonAddW100Filled';

export default IconMaterialPersonAddW100Filled;
