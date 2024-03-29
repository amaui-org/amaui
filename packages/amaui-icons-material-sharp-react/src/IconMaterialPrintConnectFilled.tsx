import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectFilled'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M718 903 604 790l57-56 57 56 141-141 57 56-198 198Zm-478 33V776H80V416h800v150q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530 696H320v160h204q7 22 17 42t24 38H240Zm0-560V216h480v160H240Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectFilled.displayName = 'AmauiIconMaterialPrintConnectFilled';

export default IconMaterialPrintConnectFilled;
