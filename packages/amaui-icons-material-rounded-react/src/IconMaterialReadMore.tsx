import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadMore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMore'

      short_name='ReadMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.075 13H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h6.075L6.75 8.65q-.275-.275-.287-.687-.013-.413.287-.713.275-.275.7-.275.425 0 .7.275l4.05 4.05q.3.3.3.7 0 .4-.3.7l-4.05 4.05q-.275.275-.687.288-.413.012-.713-.288-.275-.275-.275-.7 0-.425.275-.7ZM14 9q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h7q.425 0 .712.287Q22 7.575 22 8t-.288.712Q21.425 9 21 9Zm0 8q-.425 0-.712-.288Q13 16.425 13 16t.288-.713Q13.575 15 14 15h7q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 17 21 17Zm3-4q-.425 0-.712-.288Q16 12.425 16 12t.288-.713Q16.575 11 17 11h4q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13Z"/>
    </Icon>
  );
});

IconMaterialReadMore.displayName = 'AmauiIconMaterialReadMore';

export default IconMaterialReadMore;
