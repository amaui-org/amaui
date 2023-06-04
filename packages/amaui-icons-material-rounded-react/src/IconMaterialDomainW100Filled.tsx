import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainW100Filled'

      short_name='Domain'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 19.9q-.275 0-.487-.212-.213-.213-.213-.488V3.9q0-.275.213-.488.212-.212.487-.212h7.3q.275 0 .488.212.212.213.212.488v3.3h8.7q.275 0 .487.212.213.213.213.488v11.3q0 .275-.213.488-.212.212-.487.212Zm0-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h8.7V7.9h-8.7v3.3h2.5v.7h-2.5v3.3h2.5v.7h-2.5Zm5-7.3v-.7h.7v.7Zm0 4v-.7h.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDomainW100Filled.displayName = 'AmauiIconMaterialDomainW100Filled';

export default IconMaterialDomainW100Filled;
