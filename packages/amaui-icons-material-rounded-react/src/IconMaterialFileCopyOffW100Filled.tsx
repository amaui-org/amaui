import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOffW100Filled'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M737-333 301-776q-5-5-7-10t-2-11v-11q0-25 17.5-42.5T352-868h249q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v327q0 20-18.5 27.5T737-333Zm101 231q-5 5-10 5t-10-5L668-252H352q-26 0-43-17t-17-43v-316L102-818q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102ZM657-692h105L612-842l150 150-150-150v105q0 19 13 32t32 13ZM192-92q-26 0-43-17t-17-43v-422q0-6 4-10t10-4q6 0 10 4t4 10v422q0 12 10 22t22 10h382q6 0 10 4t4 10q0 6-4 10t-10 4H192Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOffW100Filled.displayName = 'AmauiIconMaterialFileCopyOffW100Filled';

export default IconMaterialFileCopyOffW100Filled;
