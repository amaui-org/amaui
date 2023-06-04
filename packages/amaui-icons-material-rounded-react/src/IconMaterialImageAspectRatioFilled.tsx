import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioFilled'

      short_name='ImageAspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12h2v-2H6Zm4 0h2v-2h-2Zm4 4h2v-2h-2Zm0-4h2v-2h-2ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioFilled.displayName = 'AmauiIconMaterialImageAspectRatioFilled';

export default IconMaterialImageAspectRatioFilled;
