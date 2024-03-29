import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeReaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReaderFilled'

      short_name='BarcodeReader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.5 0-2.388-1.163-.887-1.162-.512-2.587l1.8-6.8q-.825-.525-1.362-1.425Q3 8.125 3 7q0-1.65 1.175-2.825Q5.35 3 7 3h11.225l-4 8h-3.25l-.275 1H12v4H9.65l-.75 2.8q-.275.975-1.075 1.587Q7.025 21 6 21ZM19 5l-.625-1.35L22 2l.6 1.375Zm3 7-3.625-1.625L19 9l3.6 1.65Zm-3-4.25v-1.5h4v1.5Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReaderFilled.displayName = 'AmauiIconMaterialBarcodeReaderFilled';

export default IconMaterialBarcodeReaderFilled;
