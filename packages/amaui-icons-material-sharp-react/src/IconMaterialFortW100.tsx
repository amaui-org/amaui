import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFortW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortW100'

      short_name='Fort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 20.35v-3.075l2-2v-6.55l-2-2V3.65h.7v2h3.3v-2h.7v2h3.3v-2h.7v3.075l-2 2v1.925h7.3V8.725l-2-2V3.65h.7v2h3.3v-2h.7v2h3.3v-2h.7v3.075l-2 2v6.55l2 2v3.075h-7.7v-5h-5.3v5Zm.7-.7h6.3v-5h6.7v5h6.3v-2.1l-2-2v-7.1l2.1-2.1h-7.5l2.1 2.1v2.9h-8.7v-2.9l2.1-2.1h-7.5l2.1 2.1v7.1l-2 2ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialFortW100.displayName = 'AmauiIconMaterialFortW100';

export default IconMaterialFortW100;
