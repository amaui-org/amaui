import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendTimeExtensionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtensionW100Filled'

      short_name='SendTimeExtension'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 20.95v-3.2l3.8-.75-3.8-.75v-3.2l7.9 3.95ZM9.5 19.7H4.3V15q.75-.325 1.225-1Q6 13.325 6 12.5T5.525 11q-.475-.675-1.225-1V5.3H9q.35-.8 1.012-1.25.663-.45 1.488-.45t1.488.45Q13.65 4.5 14 5.3h4.7v8.05l-6.8-3.4v8.075q-.95-.125-1.675.337-.725.463-.725 1.338Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtensionW100Filled.displayName = 'AmauiIconMaterialSendTimeExtensionW100Filled';

export default IconMaterialSendTimeExtensionW100Filled;
