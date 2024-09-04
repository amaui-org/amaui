import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptLongOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongOff'

      short_name='ReceiptLongOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m819-28-59-59q-10 3-19.5 5T720-80H240q-50 0-85-35t-35-85v-120h120v-287L27-820l57-57L876-85l-57 57ZM240-160h447l-80-80H200v40q0 17 11.5 28.5T240-160Zm600-73-80-80v-447H313l-73-73v-47l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v647Zm-520-87h207L320-527v207Zm155-280-80-80h205v80H475Zm120 120-80-80h85v80h-5Zm85 0q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480Zm0-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600ZM200-160v-80 80Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongOff.displayName = 'AmauiIconMaterialReceiptLongOff';

export default IconMaterialReceiptLongOff;
