import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOffW100Filled'

      short_name='MicExternalOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.45 6.8 6.6 3.95q.2-.05.338-.05h.212q.975 0 1.662.687.688.688.688 1.663v.237q0 .113-.05.313Zm9.05 9.05-.7-.7V4.6H13v5.75l-.7-.7V3.9h6.2Zm1.55 5.35L13 14.15v5.95H6.8V17h-.7l-.85-8.3h2.3l-5.1-5.1.5-.5 17.6 17.6ZM7.5 19.4h4.8v-5.95l-3.4-3.4L8.2 17h-.7Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOffW100Filled.displayName = 'AmauiIconMaterialMicExternalOffW100Filled';

export default IconMaterialMicExternalOffW100Filled;
