import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintErrorFilled'

      short_name='PrintError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 936q-17 0-28.5-11.5T720 896q0-17 11.5-28.5T760 856q17 0 28.5 11.5T800 896q0 17-11.5 28.5T760 936Zm-40-160V576h80v200h-80ZM240 936V776H80V416h793v80H640v200H320v160h320v80H240Zm0-560V216h480v160H240Z"/>
    </Icon>
  );
});

IconMaterialPrintErrorFilled.displayName = 'AmauiIconMaterialPrintErrorFilled';

export default IconMaterialPrintErrorFilled;
