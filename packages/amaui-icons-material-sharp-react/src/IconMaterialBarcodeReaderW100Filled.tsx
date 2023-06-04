import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeReaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReaderW100Filled'

      short_name='BarcodeReader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.85 0-1.35-.663-.5-.662-.3-1.462L6.275 9.65q-.8-.2-1.387-.938Q4.3 7.975 4.3 7q0-1.125.788-1.913Q5.875 4.3 7 4.3h9.125l-2.7 5.4h-3.65l-.4 1.525h.725v2.7H8.65l-1 3.85q-.15.55-.613.888Q6.575 19 6 19ZM17.675 4.55l-.325-.725 2.975-1.35.325.725Zm2.65 6.975L17.35 10.2l.325-.725 2.975 1.35ZM17.85 7.4v-.8h3.3v.8Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReaderW100Filled.displayName = 'AmauiIconMaterialBarcodeReaderW100Filled';

export default IconMaterialBarcodeReaderW100Filled;
