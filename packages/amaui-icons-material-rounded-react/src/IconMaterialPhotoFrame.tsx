import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoFrame = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrame'

      short_name='PhotoFrame'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 15h14l-4.5-6-3.5 4.5-2.5-3Zm1 6q-.425 0-.713-.288Q5 20.425 5 20v-1H3q-.825 0-1.412-.587Q1 17.825 1 17V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v11q0 .825-.587 1.413Q21.825 19 21 19h-2v1q0 .425-.288.712Q18.425 21 18 21Zm-3-4h18V6H3v11Zm0 0V6v11Z"/>
    </Icon>
  );
});

IconMaterialPhotoFrame.displayName = 'AmauiIconMaterialPhotoFrame';

export default IconMaterialPhotoFrame;
