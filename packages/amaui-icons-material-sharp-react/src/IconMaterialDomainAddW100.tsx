import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainAddW100'

      short_name='DomainAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.95 19.9V3.2h8.7v4h9.4v8.4h-.7V7.9h-8.7v3.3h2.5v.7h-2.5v3.3h2.5v.7h-2.5v3.3h5v.7Zm.7-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm12.7 14.7v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2Zm-3.7-10v-.7h.7v.7Zm0 4v-.7h.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDomainAddW100.displayName = 'AmauiIconMaterialDomainAddW100';

export default IconMaterialDomainAddW100;
