import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoFilled'

      short_name='SwitchVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.825 14.825q.275.275.675.275t.7-.3q.275-.275.275-.7 0-.425-.275-.7l-.4-.4h4.4l-.425.425q-.275.275-.275.675t.3.7q.275.275.7.275.425 0 .7-.275l2.1-2.1q.15-.15.213-.325.062-.175.062-.375t-.062-.375q-.063-.175-.213-.325l-2.125-2.125Q12.9 8.9 12.5 8.9t-.7.3q-.275.275-.275.7 0 .425.275.7l.4.4H7.8l.425-.425Q8.5 10.3 8.5 9.9t-.3-.7q-.275-.275-.7-.275-.425 0-.7.275l-2.1 2.1q-.15.15-.213.325-.062.175-.062.375t.062.375q.063.175.213.325ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.225-.225.538-.113Q22 7.35 22 7.7v8.6q0 .35-.312.462-.313.113-.538-.112L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoFilled.displayName = 'AmauiIconMaterialSwitchVideoFilled';

export default IconMaterialSwitchVideoFilled;
