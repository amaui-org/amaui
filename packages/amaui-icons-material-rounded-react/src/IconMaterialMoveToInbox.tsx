import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveToInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInbox'

      short_name='MoveToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14v-3h-3q-.75.95-1.787 1.475Q13.175 18 12 18t-2.212-.525Q8.75 16.95 8 16H5v3Zm7-3q.75 0 1.425-.363.675-.362 1.15-1.137.125-.225.35-.363.225-.137.525-.137H19V5H5v9h3.55q.3 0 .525.137.225.138.35.363.475.775 1.15 1.137Q11.25 16 12 16Zm0-2.425q-.2 0-.375-.063-.175-.062-.325-.212l-2.6-2.6q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3l.875.875V7q0-.425.288-.713Q11.575 6 12 6t.713.287Q13 6.575 13 7v3.15l.9-.9q.275-.275.688-.275.412 0 .712.3t.288.725q-.013.425-.313.725L12.7 13.3q-.15.15-.325.212-.175.063-.375.063ZM5 19h14Z"/>
    </Icon>
  );
});

IconMaterialMoveToInbox.displayName = 'AmauiIconMaterialMoveToInbox';

export default IconMaterialMoveToInbox;
