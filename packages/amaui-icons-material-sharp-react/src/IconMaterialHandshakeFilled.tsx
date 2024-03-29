import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandshakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeFilled'

      short_name='Handshake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.1 21.4 10.7 20l5.325-5.325-.725-.725-5.325 5.325-1.4-1.4L13.9 12.55l-.7-.7-5.325 5.325-1.4-1.4 5.3-5.35-.725-.7-5.325 5.325-1.4-1.4 6.275-6.3 5.175 5.175L18.6 9.7l-5.9-5.9 2.05-2.05 8.5 8.5ZM3.525 13 .75 10.225 9.225 1.75l7.95 7.95-1.425 1.425-5.175-5.175Z"/>
    </Icon>
  );
});

IconMaterialHandshakeFilled.displayName = 'AmauiIconMaterialHandshakeFilled';

export default IconMaterialHandshakeFilled;
