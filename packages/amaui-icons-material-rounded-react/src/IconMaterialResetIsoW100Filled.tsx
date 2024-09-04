import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetIsoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetIsoW100Filled'

      short_name='ResetIso'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-412v-23q0-19 13-32t32-13h23l-68 68Zm0 150v-40l179-178h40L478-262Zm3 109 326-326q8 1 13.5 6.5T827-459L501-133q-8 0-14-6t-6-14Zm129 21 218-218v39L650-132h-40Zm150 0 68-68v23q0 19-13 32t-32 13h-23ZM480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-125q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T370-172H226q-6 0-10-4t-4-10q0-6 4-10t10-4h130q-81-37-132.5-111.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24q98 0 175.5 55.5T767-590q2 5 0 10.5t-7 7.5q-5 2-10.5-.5T742-580q-30-79-100.5-129.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetIsoW100Filled.displayName = 'AmauiIconMaterialResetIsoW100Filled';

export default IconMaterialResetIsoW100Filled;
