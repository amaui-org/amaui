import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonFilledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonFilledW100Filled'

      short_name='PersonFilled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11.2q-1.125 0-1.912-.788Q9.3 9.625 9.3 8.5t.788-1.912Q10.875 5.8 12 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-5.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 13.8 12 13.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v.55q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialPersonFilledW100Filled.displayName = 'AmauiIconMaterialPersonFilledW100Filled';

export default IconMaterialPersonFilledW100Filled;
