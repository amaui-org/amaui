import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPresentToAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllFilled'

      short_name='PresentToAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.425 0 .713-.288Q13 15.425 13 15v-3.15l.9.875q.3.3.7.3.4 0 .725-.325.275-.275.275-.688 0-.412-.3-.712l-2.6-2.6q-.15-.15-.325-.225Q12.2 8.4 12 8.4q-.2.025-.375.087-.175.063-.325.213l-2.6 2.6q-.275.275-.275.687 0 .413.3.713.275.275.7.275.425 0 .7-.275l.875-.875V15q0 .425.288.712.287.288.712.288Zm-8 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllFilled.displayName = 'AmauiIconMaterialPresentToAllFilled';

export default IconMaterialPresentToAllFilled;
