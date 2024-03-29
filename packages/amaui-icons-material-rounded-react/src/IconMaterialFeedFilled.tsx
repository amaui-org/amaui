import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedFilled'

      short_name='Feed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h11l5 5v11q0 .825-.587 1.413Q19.825 21 19 21Zm3-4h8q.425 0 .712-.288Q17 16.425 17 16t-.288-.713Q16.425 15 16 15H8q-.425 0-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm0-8h3q.425 0 .713-.288Q12 8.425 12 8t-.287-.713Q11.425 7 11 7H8q-.425 0-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm0 4h8q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm8-4h3l-4-4v3q0 .425.288.712Q15.575 9 16 9Z"/>
    </Icon>
  );
});

IconMaterialFeedFilled.displayName = 'AmauiIconMaterialFeedFilled';

export default IconMaterialFeedFilled;
