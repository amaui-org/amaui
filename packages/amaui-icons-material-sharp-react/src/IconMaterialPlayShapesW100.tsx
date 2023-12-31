import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayShapesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayShapesW100'

      short_name='PlayShapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m566-554-19-19 116-116-116-116 19-20 116 116 116-116 19 20-116 116 116 116-19 19-116-116-116 116Zm-446 4 162-279 162 279H120Zm163 405q-57 0-96-39t-39-95.571Q148-337 187-376t96-39q57 0 96 39t39 96q0 57-39 96t-96 39Zm0-28q45 0 76-31t31-76q0-45-31-76t-76-31q-45 0-76 31t-31 76q0 45 31 76t76 31ZM169-578h227L282-773 169-578Zm378 433v-270h270v270H547Zm28-28h214v-214H575v214ZM283-676Zm0 396Zm399 0Z"/>
    </Icon>
  );
});

IconMaterialPlayShapesW100.displayName = 'AmauiIconMaterialPlayShapesW100';

export default IconMaterialPlayShapesW100;
