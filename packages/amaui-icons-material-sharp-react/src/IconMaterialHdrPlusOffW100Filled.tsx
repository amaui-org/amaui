import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlusOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusOffW100Filled'

      short_name='HdrPlusOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M564-524h60q14 0 23-9t9-23v-88q0-14-9-23t-23-9h-60v152ZM324-324h80q14 0 23-9t9-23v-8q0-14-9-23t-23-9h-80v72Zm0 28h66l31 72q2 4 5 6t8 2q8 0 12-6.5t1-13.5l-27-62q19-7 31.5-22.5T464-356v-8q0-25-17.5-42.5T404-424h-94q-6 0-10 4t-4 10v180q0 6 4 10t10 4q6 0 10-4t4-10v-66Zm-14-200q6 0 10-4t4-10v-106l-28-28v134q0 6 4 10t10 4Zm170 364q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-78 28.5-140T233-727l494 494q-48 48-113 74.5T480-132Zm366 58L74-846q-4-4-4.5-9.5T74-866q5-5 10-5t10 5L866-94q4 4 4.5 9.5T866-74q-5 5-10 5t-10-5Zm-70-224L578-496h46q26 0 43-17t17-43v-88q0-26-17-43t-43-17h-88v166l-72-72v-80q0-6-4-10t-10-4q-6 0-10 4t-4 10v52L298-776q44-26 85-39t97-13q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 47-11.5 92T776-298Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusOffW100Filled.displayName = 'AmauiIconMaterialHdrPlusOffW100Filled';

export default IconMaterialHdrPlusOffW100Filled;
