import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomW100'

      short_name='NoMeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.4 13.6-.7-.7V6h-2v4.9l-.7-.7V5H7.85l-.7-.7h5.8q.325 0 .538.212.212.213.212.538v.25h1.95q.325 0 .538.212.212.213.212.538Zm2.75 6.55L13.7 14.7v4.25q0 .325-.212.537-.213.213-.538.213h-8.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H6.3V7.3L3.85 4.85q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l15.3 15.3q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125ZM7 19h6v-5L7 8Zm3.425-11.4ZM10 11Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomW100.displayName = 'AmauiIconMaterialNoMeetingRoomW100';

export default IconMaterialNoMeetingRoomW100;
