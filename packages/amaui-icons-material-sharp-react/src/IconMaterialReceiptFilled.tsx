import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptFilled'

      short_name='Receipt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v20l-1.5-1.5L18 22l-1.5-1.5L15 22l-1.5-1.5L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5Zm3-5h12v-2H6Zm0-4h12v-2H6Zm0-4h12V7H6Z"/>
    </Icon>
  );
});

IconMaterialReceiptFilled.displayName = 'AmauiIconMaterialReceiptFilled';

export default IconMaterialReceiptFilled;
