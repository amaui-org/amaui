import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceSelectionOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceSelectionOffW100Filled'

      short_name='VoiceSelectionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m806-266-23-23q22-80 1-159t-80-138l20-20q48 48 73 109t25 128q0 26-4 52t-12 51ZM488-584l-94-197 25-13 113 236v18l-44-44ZM852-68 90-830l20-20L872-88l-20 20Zm-720-64v-28h181v-67q-45-14-73-49.5T212-354v-50h160v-110h74l28 28h-74v110H240v24q0 35 24.5 62.5T328-253l13 3v118H132Z"/>
    </Icon>
  );
});

IconMaterialVoiceSelectionOffW100Filled.displayName = 'AmauiIconMaterialVoiceSelectionOffW100Filled';

export default IconMaterialVoiceSelectionOffW100Filled;
