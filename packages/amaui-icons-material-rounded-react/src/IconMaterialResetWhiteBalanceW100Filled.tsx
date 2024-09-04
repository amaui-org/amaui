import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetWhiteBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetWhiteBalanceW100Filled'

      short_name='ResetWhiteBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M584-131q-44 0-74-30.5T480-236q0-25 12-47t32-37v-100q0-25 17.5-42.5T584-480q25 0 42.5 17.5T644-420v100q20 15 32 37t12 47q0 44-30 74.5T584-131Zm-76-105h152q0-22-12-39.5T616-304v-116q0-14-9-23t-23-9q-14 0-23 9t-9 23v116q-20 11-32 28.5T508-236Zm218-112q-5 0-9-4t-4-10q0-5 4.5-9t9.5-4h48q5 0 9 3.5t4 9.5q0 5-4 9.5t-9 4.5h-49Zm0-87q-5 0-9-4t-4-10q0-5 4.5-9t9.5-4h88q5 0 9 3.5t4 9.5q0 5-4 9.5t-9 4.5h-89ZM480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-125q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T370-172H226q-6 0-10-4t-4-10q0-6 4-10t10-4h130q-81-37-132.5-111.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24q98 0 175.5 55.5T767-590q2 5 0 10.5t-7 7.5q-5 2-10.5-.5T742-580q-30-79-100.5-129.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetWhiteBalanceW100Filled.displayName = 'AmauiIconMaterialResetWhiteBalanceW100Filled';

export default IconMaterialResetWhiteBalanceW100Filled;
