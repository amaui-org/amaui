import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobiledataOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOff'

      short_name='MobiledataOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16 13.15-2-2V6.8l-.925.925Q12.8 8 12.4 8t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.625 2.625Q18.6 6.6 18.6 7t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-.9-.9Zm3.1 8.75L10 12.8v4.35l.85-.85q.3-.3.712-.3.413 0 .713.3t.3.713q0 .412-.3.712L9.7 20.3q-.15.15-.325.212-.175.063-.375.063t-.375-.063Q8.45 20.45 8.3 20.3l-2.6-2.6q-.275-.275-.275-.687 0-.413.3-.713t.725-.288q.425.013.725.313L8 17.15V10.8L2.075 4.875Q1.8 4.6 1.8 4.2t.3-.7q.275-.275.7-.275.425 0 .7.275l17.025 17.025q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialMobiledataOff.displayName = 'AmauiIconMaterialMobiledataOff';

export default IconMaterialMobiledataOff;
