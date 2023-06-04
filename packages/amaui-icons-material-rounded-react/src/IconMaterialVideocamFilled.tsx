import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamFilled'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.225-.225.538-.113Q22 7.35 22 7.7v8.6q0 .35-.312.462-.313.113-.538-.112L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialVideocamFilled.displayName = 'AmauiIconMaterialVideocamFilled';

export default IconMaterialVideocamFilled;
