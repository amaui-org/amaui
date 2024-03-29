import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSevereColdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdFilled'

      short_name='SevereCold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 10q-.425 0-.712-.288Q19 9.425 19 9t.288-.713Q19.575 8 20 8t.712.287Q21 8.575 21 9t-.288.712Q20.425 10 20 10ZM10 22v-3.6L7.4 21 6 19.6l4-4V14H8.4l-4 4L3 16.6 5.6 14H2v-2h3.6L3 9.4 4.4 8l4 4H10v-1.6l-4-4L7.4 5 10 7.6V4h2v3.6L14.6 5 16 6.4l-4 4V12h8v2h-3.6l2.6 2.6-1.4 1.4-4-4H12v1.6l4 4-1.4 1.4-2.6-2.6V22Zm9-15V2h2v5Z"/>
    </Icon>
  );
});

IconMaterialSevereColdFilled.displayName = 'AmauiIconMaterialSevereColdFilled';

export default IconMaterialSevereColdFilled;
