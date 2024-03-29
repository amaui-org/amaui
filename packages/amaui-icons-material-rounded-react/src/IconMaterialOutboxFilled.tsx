import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxFilled'

      short_name='Outbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q-.425 0-.712-.288Q11 13.425 11 13V9.85l-.9.9q-.275.275-.687.275-.413 0-.713-.3T8.413 10q.012-.425.312-.725L11.3 6.7q.15-.15.325-.212.175-.063.375-.063t.375.063q.175.062.325.212l2.6 2.6q.3.3.3.712 0 .413-.3.713t-.712.3q-.413 0-.713-.3L13 9.85V13q0 .425-.287.712Q12.425 14 12 14Zm-7 7q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-5q.75 0 1.425-.363.675-.362 1.15-1.137.125-.225.35-.363.225-.137.525-.137H19V5H5v9h3.55q.3 0 .525.137.225.138.35.363.475.775 1.15 1.137Q11.25 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialOutboxFilled.displayName = 'AmauiIconMaterialOutboxFilled';

export default IconMaterialOutboxFilled;
