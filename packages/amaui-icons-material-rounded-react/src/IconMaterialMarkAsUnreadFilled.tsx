import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadFilled'

      short_name='MarkAsUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.825 0-1.412-.587Q2 15.825 2 15V7.15q0-.375.213-.738.212-.362.587-.562l6.8-3.4q.2-.125.438-.163.237-.037.462-.037.225 0 .463.037.237.038.437.163l6.65 3.4q.3.15.512.475.213.325.288.675h-2.925L10.5 4.25 4 7.475Zm3 4q-.825 0-1.412-.587Q5 19.825 5 19v-9q0-.825.588-1.413Q6.175 8 7 8h13q.825 0 1.413.587Q22 9.175 22 10v9q0 .825-.587 1.413Q20.825 21 20 21Zm6.5-5.775q.125 0 .225-.025t.225-.075l5.575-2.875q.2-.1.338-.312.137-.213.137-.488 0-.5-.4-.762-.4-.263-.9-.013l-5.2 2.675-5.2-2.675q-.425-.225-.862.013Q7 10.925 7 11.45q0 .275.15.488.15.212.35.312l5.55 2.875q.1.05.45.1Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadFilled.displayName = 'AmauiIconMaterialMarkAsUnreadFilled';

export default IconMaterialMarkAsUnreadFilled;
