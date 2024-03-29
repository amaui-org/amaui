import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeReader = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReader'

      short_name='BarcodeReader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.5 0-2.388-1.163-.887-1.162-.512-2.587l1.8-6.8q-.825-.525-1.362-1.425Q3 8.125 3 7q0-1.65 1.175-2.825Q5.35 3 7 3h11.225l-4 8h-3.25l-.275 1H12v4H9.65l-.75 2.8q-.275.975-1.075 1.587Q7.025 21 6 21Zm0-2q.35 0 .6-.2t.35-.525L8.9 11H6.825l-1.8 6.75q-.125.475.175.863.3.387.8.387ZM19 5l-.625-1.35L22 2l.6 1.375Zm3 7-3.625-1.625L19 9l3.6 1.65Zm-3-4.25v-1.5h4v1.5ZM7.875 11ZM7 9h6l2-4H7q-.825 0-1.412.588Q5 6.175 5 7t.588 1.412Q6.175 9 7 9Zm3-2Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReader.displayName = 'AmauiIconMaterialBarcodeReader';

export default IconMaterialBarcodeReader;
