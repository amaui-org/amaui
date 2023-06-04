import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnect'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 496h640-640Zm80 440V776H80V416h800v150q-18-10-38-17t-42-10v-43H160v200h80v-80h340q-16 17-29 37t-21 43H320v160h204q7 22 17 42t24 38H240Zm478-33L604 790l57-56 57 56 141-141 57 56-198 198Zm-78-487V296H320v120h-80V216h480v200h-80Z"/>
    </Icon>
  );
});

IconMaterialPrintConnect.displayName = 'AmauiIconMaterialPrintConnect';

export default IconMaterialPrintConnect;
