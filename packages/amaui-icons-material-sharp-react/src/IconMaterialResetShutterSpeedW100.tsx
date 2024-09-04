import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetShutterSpeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetShutterSpeedW100'

      short_name='ResetShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-305q0-39 16-73t43-58l75 131H479Zm88 150q-32-18-54.5-47.5T482-270h151l-66 115Zm66-185-66-116q20-11 41.5-17.5T654-480q14 0 27.5 2.5T708-470l-75 130Zm21 209q-14 0-28-2.5t-27-7.5l75-129 67 115q-20 11-41.5 17.5T654-131Zm20-209 67-116q32 18 54 48t30 68H674Zm95 165-75-130h134q0 39-16 72.5T769-175Zm2-405h-29q-30-79-100.5-129.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-139h28v188H212v-28h144q-81-37-132.5-111.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24q102 0 180.5 58.5T771-580Z"/>
    </Icon>
  );
});

IconMaterialResetShutterSpeedW100.displayName = 'AmauiIconMaterialResetShutterSpeedW100';

export default IconMaterialResetShutterSpeedW100;
