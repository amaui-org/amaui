import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReceiptLongSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongSharp'
      short_name='ReceiptLong'

      {...props}
    >
      <path d="M6 22Q4.75 22 3.875 21.125Q3 20.25 3 19V16H6V2L7.5 3.5L9 2L10.5 3.5L12 2L13.5 3.5L15 2L16.5 3.5L18 2L19.5 3.5L21 2V19Q21 20.25 20.125 21.125Q19.25 22 18 22ZM18 20Q18.425 20 18.712 19.712Q19 19.425 19 19V5H8V16H17V19Q17 19.425 17.288 19.712Q17.575 20 18 20ZM9 9V7H15V9ZM9 12V10H15V12ZM17 9Q16.575 9 16.288 8.712Q16 8.425 16 8Q16 7.575 16.288 7.287Q16.575 7 17 7Q17.425 7 17.712 7.287Q18 7.575 18 8Q18 8.425 17.712 8.712Q17.425 9 17 9ZM17 12Q16.575 12 16.288 11.712Q16 11.425 16 11Q16 10.575 16.288 10.287Q16.575 10 17 10Q17.425 10 17.712 10.287Q18 10.575 18 11Q18 11.425 17.712 11.712Q17.425 12 17 12ZM6 20H15V18H5V19Q5 19.425 5.287 19.712Q5.575 20 6 20ZM5 20Q5 20 5 19.712Q5 19.425 5 19V18V20Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongSharp.displayName = 'AmauiIconMaterialReceiptLongSharp';

export default IconMaterialReceiptLongSharp;
