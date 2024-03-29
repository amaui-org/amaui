import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabled'

      short_name='DomainDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.15-2-2V9h-8.15L10 7.15V5H7.85l-2-2H12v4h10Zm-1.5 4.15L18.15 21H2V4.8L.7 3.5l1.4-1.4 19.8 19.8ZM4 19h2v-2H4Zm0-4h2v-2H4Zm0-4h2V9H4Zm4 8h2v-2H8Zm0-4h2v-2H8Zm4 4h4.15l-2-2H12Zm6-6h-2v-2h2Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabled.displayName = 'AmauiIconMaterialDomainDisabled';

export default IconMaterialDomainDisabled;
