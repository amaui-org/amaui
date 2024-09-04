import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetShutterSpeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetShutterSpeedW100Filled'

      short_name='ResetShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-305q0-39 16-73t43-58l75 131H479Zm88 150q-32-18-54.5-47.5T482-270h151l-66 115Zm66-185-66-116q20-11 41.5-17.5T654-480q14 0 27.5 2.5T708-470l-75 130Zm21 209q-14 0-28-2.5t-27-7.5l75-129 67 115q-20 11-41.5 17.5T654-131Zm20-209 67-116q32 18 54 48t30 68H674Zm95 165-75-130h134q0 39-16 72.5T769-175ZM480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-125q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T370-172H226q-6 0-10-4t-4-10q0-6 4-10t10-4h130q-81-37-132.5-111.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24q98 0 175.5 55.5T767-590q2 5 0 10.5t-7 7.5q-5 2-10.5-.5T742-580q-30-79-100.5-129.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetShutterSpeedW100Filled.displayName = 'AmauiIconMaterialResetShutterSpeedW100Filled';

export default IconMaterialResetShutterSpeedW100Filled;
