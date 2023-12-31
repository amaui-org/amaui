import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetWrenchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetWrenchW100Filled'

      short_name='ResetWrench'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m647-254-58 58q-10 10-24 10t-24-10q-10-10-10-24t10-24l58-59q-6-12-9.5-25t-3.5-27q0-48 33-81t81-33q7 0 13 .5t12 2.5q8 3 10 10.5t-4 13.5l-38 38q-9 9-9 21t9 21l14 14q9 9 21 9t21-9l38-37q6-6 14-4.5t10 9.5q2 6 2.5 12.5t.5 12.5q0 48-33 81t-81 33q-14 0-27.5-3.5T647-254Zm-291 54q-81-37-132.5-111.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24q95 0 171.5 51.5T763-603q2 5-.5 11t-7.5 8q-6 2-11.5-2t-8.5-10q-33-73-101-118.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-125q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T370-172H226q-6 0-10-4t-4-10q0-6 4-10t10-4h130Z"/>
    </Icon>
  );
});

IconMaterialResetWrenchW100Filled.displayName = 'AmauiIconMaterialResetWrenchW100Filled';

export default IconMaterialResetWrenchW100Filled;
