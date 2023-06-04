import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainAddFilled'

      short_name='DomainAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V3h10v4h10v8h-2V9h-8v2h2v2h-2v2h2v2h-2v2h4v2Zm2-2h2v-2H4Zm0-4h2v-2H4Zm0-4h2V9H4Zm0-4h2V5H4Zm4 12h2v-2H8Zm0-4h2v-2H8Zm0-4h2V9H8Zm0-4h2V5H8Zm12 16v-2h-2v-2h2v-2h2v2h2v2h-2v2Zm-4-10v-2h2v2Zm0 4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialDomainAddFilled.displayName = 'AmauiIconMaterialDomainAddFilled';

export default IconMaterialDomainAddFilled;
