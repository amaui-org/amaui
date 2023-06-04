import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabledW100'

      short_name='DomainDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.05 17.85-.7-.7V7.9H11.1l-.15-.15V3.9h-3.9l-.7-.7h5.3v4h9.4Zm1.1 4.6L19.6 19.9H2.95V3.25L1.3 1.6l.5-.5 20.85 20.85ZM3.65 19.2h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm4 8h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm4 4h7.25l-3.3-3.3h-3.95Zm5.7-7.3h-.7v-.7h.7Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabledW100.displayName = 'AmauiIconMaterialDomainDisabledW100';

export default IconMaterialDomainDisabledW100;
