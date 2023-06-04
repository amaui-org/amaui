import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendTimeExtensionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtensionW100'

      short_name='SendTimeExtension'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 20.95v-3.2l3.8-.75-3.8-.75v-3.2l7.9 3.95ZM5 19.7q-.3 0-.5-.2t-.2-.5v-4q.75-.325 1.225-1Q6 13.325 6 12.5T5.525 11q-.475-.675-1.225-1V6q0-.3.2-.5t.5-.2h4q.35-.8 1.012-1.25.663-.45 1.488-.45t1.488.45Q13.65 4.5 14 5.3h4q.3 0 .5.2t.2.5v7.35L18 13V6h-4.55q-.15-.875-.725-1.288Q12.15 4.3 11.5 4.3q-.65 0-1.225.412Q9.7 5.125 9.55 6H5v3.6q.8.425 1.25 1.212.45.788.45 1.688 0 .9-.45 1.688Q5.8 14.975 5 15.4V19h3.65q.35-.85 1.3-1.337.95-.488 1.95-.338v.7q-.95-.125-1.737.337Q9.375 18.825 9 19.7Zm6.5-8.05Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtensionW100.displayName = 'AmauiIconMaterialSendTimeExtensionW100';

export default IconMaterialSendTimeExtensionW100;
