import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNotifications = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotifications'

      short_name='EditNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.1 13q-.2 0-.35-.15-.15-.15-.15-.35v-1.075q0-.05.15-.35l4.825-4.825 1.775 1.775-4.825 4.825q-.05.05-.35.15ZM20 7.375l.85-.85q.15-.15.15-.363 0-.212-.15-.362L19.8 4.75q-.15-.15-.362-.15-.213 0-.363.15l-.85.85ZM5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q.625.15 1.175.437.55.288 1.025.663l-1.425 1.425q-.475-.35-1.05-.537Q12.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10v7h8v-2.8l2-2V17h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Zm7 3q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm0-10.5Z"/>
    </Icon>
  );
});

IconMaterialEditNotifications.displayName = 'AmauiIconMaterialEditNotifications';

export default IconMaterialEditNotifications;
