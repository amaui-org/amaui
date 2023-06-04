import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveW100Filled'

      short_name='PersonRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.15 10.35v-.7h4.7v.7ZM9 11.2q-1.125 0-1.912-.788Q6.3 9.625 6.3 8.5t.788-1.912Q7.875 5.8 9 5.8t1.913.788q.787.787.787 1.912t-.787 1.912Q10.125 11.2 9 11.2Zm-6.7 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q7.65 13.8 9 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveW100Filled.displayName = 'AmauiIconMaterialPersonRemoveW100Filled';

export default IconMaterialPersonRemoveW100Filled;
