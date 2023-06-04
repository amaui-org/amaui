import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLteMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataFilled'

      short_name='LteMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16V8h2v6h3v2Zm7 0v-6H9V8h6v2h-2v6Zm5 0V8h5v2h-3v1h3v2h-3v1h3v2Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataFilled.displayName = 'AmauiIconMaterialLteMobiledataFilled';

export default IconMaterialLteMobiledataFilled;
