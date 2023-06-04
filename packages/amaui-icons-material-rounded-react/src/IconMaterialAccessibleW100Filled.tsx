import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleW100Filled'

      short_name='Accessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.125 6.35q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm5.65 15.05q-.15 0-.25-.1t-.1-.25V17q0-.3-.175-.475t-.475-.175h-4.6q-.575 0-.987-.412-.413-.413-.413-.988V9q0-.6.375-.975t.975-.375q.275 0 .6.175.325.175.8.725 1.325 1.525 2.288 2.138.962.612 2.187.862.125.025.2.125.075.1.075.225 0 .175-.112.275-.113.1-.288.05-1.35-.25-2.375-.9T13.275 9.35v6h3.45q.575 0 .987.412.413.413.413.988v4.3q0 .15-.1.25t-.25.1Zm-7.65 0q-1.8 0-3.1-1.3t-1.3-3.1q0-1.725 1.138-2.95Q8 12.825 9.775 12.625v.7q-1.425.15-2.387 1.175-.963 1.025-.963 2.5 0 1.55 1.075 2.625t2.625 1.075q1.475 0 2.5-.963 1.025-.962 1.175-2.387h.7q-.15 1.725-1.4 2.887-1.25 1.163-2.975 1.163Z"/>
    </Icon>
  );
});

IconMaterialAccessibleW100Filled.displayName = 'AmauiIconMaterialAccessibleW100Filled';

export default IconMaterialAccessibleW100Filled;
