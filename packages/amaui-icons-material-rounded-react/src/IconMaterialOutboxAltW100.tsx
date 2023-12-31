import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboxAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxAltW100'

      short_name='OutboxAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M587-453q17-8 17-27t-17-27L335-624q-15-7-29 1.5T292-597v234q0 17 14 25.5t29 1.5l252-117Zm-267 93v-80l120-40-120-40v-80l260 120-260 120Zm-88 188q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialOutboxAltW100.displayName = 'AmauiIconMaterialOutboxAltW100';

export default IconMaterialOutboxAltW100;
