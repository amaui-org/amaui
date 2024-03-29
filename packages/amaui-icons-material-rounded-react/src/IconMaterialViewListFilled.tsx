import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListFilled'

      short_name='ViewList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9q-.425 0-.712-.288Q3 8.425 3 8V6q0-.425.288-.713Q3.575 5 4 5h2q.425 0 .713.287Q7 5.575 7 6v2q0 .425-.287.712Q6.425 9 6 9Zm5 0q-.425 0-.712-.288Q8 8.425 8 8V6q0-.425.288-.713Q8.575 5 9 5h11q.425 0 .712.287Q21 5.575 21 6v2q0 .425-.288.712Q20.425 9 20 9Zm0 5q-.425 0-.712-.288Q8 13.425 8 13v-2q0-.425.288-.713Q8.575 10 9 10h11q.425 0 .712.287.288.288.288.713v2q0 .425-.288.712Q20.425 14 20 14Zm-5 0q-.425 0-.712-.288Q3 13.425 3 13v-2q0-.425.288-.713Q3.575 10 4 10h2q.425 0 .713.287Q7 10.575 7 11v2q0 .425-.287.712Q6.425 14 6 14Zm5 5q-.425 0-.712-.288Q8 18.425 8 18v-2q0-.425.288-.713Q8.575 15 9 15h11q.425 0 .712.287.288.288.288.713v2q0 .425-.288.712Q20.425 19 20 19Zm-5 0q-.425 0-.712-.288Q3 18.425 3 18v-2q0-.425.288-.713Q3.575 15 4 15h2q.425 0 .713.287Q7 15.575 7 16v2q0 .425-.287.712Q6.425 19 6 19Z"/>
    </Icon>
  );
});

IconMaterialViewListFilled.displayName = 'AmauiIconMaterialViewListFilled';

export default IconMaterialViewListFilled;
