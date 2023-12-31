import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetWrenchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetWrenchW100'

      short_name='ResetWrench'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m647-254-82 82-48-48 82-83q-6-12-9.5-25t-3.5-27q0-48 33-81t81-33q13 0 25 2.5t23 7.5l-76 76 56 56 76-75q5 11 7.5 22.5T814-355q0 48-33 81t-81 33q-14 0-27.5-3.5T647-254Zm124-326h-29q-30-79-100.5-129.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-139h28v188H212v-28h144q-81-37-132.5-111.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24q102 0 180.5 58.5T771-580Z"/>
    </Icon>
  );
});

IconMaterialResetWrenchW100.displayName = 'AmauiIconMaterialResetWrenchW100';

export default IconMaterialResetWrenchW100;
