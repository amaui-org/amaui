import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCamera'

      short_name='SwitchCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 13q0 .2.088.387.087.188.212.313l2.6 2.6q.275.275.7.275.425 0 .7-.275.275-.275.275-.688 0-.412-.275-.712l-.85-.9h6.3l-.85.9q-.275.3-.275.712 0 .413.275.688.275.275.7.275.425 0 .7-.275l2.6-2.6q.125-.125.213-.313.087-.187.087-.387t-.087-.388q-.088-.187-.213-.312l-2.6-2.6q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.687 0 .413.275.713l.85.9h-6.3l.85-.9q.275-.3.275-.713 0-.412-.275-.687-.275-.275-.7-.275-.425 0-.7.275l-2.6 2.6q-.125.125-.212.312Q5.4 12.8 5.4 13ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.4 3.65q.275-.325.662-.488Q9.45 3 9.875 3h4.25q.425 0 .813.162.387.163.662.488L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Zm16-2V7H4v12ZM4 19V7v12Z"/>
    </Icon>
  );
});

IconMaterialSwitchCamera.displayName = 'AmauiIconMaterialSwitchCamera';

export default IconMaterialSwitchCamera;
