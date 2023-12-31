import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceSelectionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceSelectionW100'

      short_name='VoiceSelection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m633-223-20-20q26-26 39.5-58.5T666-369q0-35-13.5-67.5T613-495l20-20q29 29 45 66.5t16 79.5q0 42-16 79.5T633-223Zm91 91-20-20q44-44 67-99.5T794-369q0-62-23-117.5T704-586l20-20q48 48 73 109t25 128q0 67-25 128t-73 109Zm-592 0v-28h181v-67q-45-14-73-49.5T212-354v-50h160v-110h119l-97-267 27-10 105 291v14H400v110H240v24q0 35 24.5 62.5T328-253l13 3v118H132Z"/>
    </Icon>
  );
});

IconMaterialVoiceSelectionW100.displayName = 'AmauiIconMaterialVoiceSelectionW100';

export default IconMaterialVoiceSelectionW100;
