import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReply = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reply'

      short_name='Reply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 19q-.425 0-.712-.288Q19 18.425 19 18v-3q0-1.25-.875-2.125T16 12H6.8l2.925 2.925Q10 15.2 10 15.6t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.625-4.625Q8.6 5.4 9 5.4t.7.3q.275.275.275.7 0 .425-.275.7L6.8 10H16q2.075 0 3.538 1.462Q21 12.925 21 15v3q0 .425-.288.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialReply.displayName = 'AmauiIconMaterialReply';

export default IconMaterialReply;
