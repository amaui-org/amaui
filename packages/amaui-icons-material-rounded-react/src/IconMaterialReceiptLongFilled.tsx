import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReceiptLongFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongFilled'

      short_name='ReceiptLong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-1.25 0-2.125-.875T3 19v-2q0-.425.288-.712Q3.575 16 4 16h2V2.725q0-.225.2-.275.2-.05.4.15l.9.9 1.15-1.15Q8.8 2.2 9 2.2q.2 0 .35.15L10.5 3.5l1.15-1.15q.15-.15.35-.15.2 0 .35.15L13.5 3.5l1.15-1.15q.15-.15.35-.15.2 0 .35.15L16.5 3.5l1.15-1.15q.15-.15.35-.15.2 0 .35.15L19.5 3.5l.9-.9q.2-.2.4-.163.2.038.2.288V19q0 1.25-.875 2.125T18 22Zm12-2q.425 0 .712-.288Q19 19.425 19 19V5H8v11h8q.425 0 .712.288.288.287.288.712v2q0 .425.288.712.287.288.712.288ZM9.975 9q-.425 0-.7-.288Q9 8.425 9 8t.288-.713Q9.575 7 10 7h4q.425 0 .713.287Q15 7.575 15 8t-.287.712Q14.425 9 14 9Zm0 3q-.425 0-.7-.288Q9 11.425 9 11t.288-.713Q9.575 10 10 10h4q.425 0 .713.287.287.288.287.713t-.287.712Q14.425 12 14 12ZM17 9q-.425 0-.712-.288Q16 8.425 16 8t.288-.713Q16.575 7 17 7t.712.287Q18 7.575 18 8t-.288.712Q17.425 9 17 9Zm0 3q-.425 0-.712-.288Q16 11.425 16 11t.288-.713Q16.575 10 17 10t.712.287Q18 10.575 18 11t-.288.712Q17.425 12 17 12Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongFilled.displayName = 'AmauiIconMaterialReceiptLongFilled';

export default IconMaterialReceiptLongFilled;
