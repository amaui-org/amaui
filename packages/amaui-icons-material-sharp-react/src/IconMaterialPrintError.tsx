import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintError'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 936V776H80V416h793v80H160v200h80v-80h400v80H320v160h320v80H240Zm0-520V216h480v200h-80V296H320v120h-80Zm520 520q-17 0-28.5-11.5T720 896q0-17 11.5-28.5T760 856q17 0 28.5 11.5T800 896q0 17-11.5 28.5T760 936Zm-40-160V576h80v200h-80ZM160 496h713-713Z"/>
    </Icon>
  );
});

IconMaterialPrintError.displayName = 'AmauiIconMaterialPrintError';

export default IconMaterialPrintError;
