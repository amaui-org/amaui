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
      <path d="M3.65 19.9q-.275 0-.487-.212-.213-.213-.213-.488V3.9q0-.275.213-.488.212-.212.487-.212h7.3q.275 0 .488.212.212.213.212.488v3.3h8.7q.275 0 .487.212.213.213.213.488v7.7h-.7V7.9h-8.7v3.3h2.5v.7h-2.5v3.3h2.5v.7h-2.5v3.3h5v.7Zm0-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3ZM20.7 21.9q-.15 0-.25-.1t-.1-.25V19.9H18.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65v-1.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.65v1.65q0 .15-.1.25t-.25.1Zm-4.05-10v-.7h.7v.7Zm0 4v-.7h.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDomainAddW100.displayName = 'AmauiIconMaterialDomainAddW100';

export default IconMaterialDomainAddW100;
