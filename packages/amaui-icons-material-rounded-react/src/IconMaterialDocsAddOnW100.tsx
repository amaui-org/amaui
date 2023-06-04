import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDocsAddOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAddOnW100'

      short_name='DocsAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.65 20.325v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-12-2.975v-.7h7q0 .175.013.35.012.175.012.35Zm0-4v-.7h9.2q-.2.15-.387.325-.188.175-.388.375Zm0-4v-.7h13.7v.7Zm0-4v-.7h13.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDocsAddOnW100.displayName = 'AmauiIconMaterialDocsAddOnW100';

export default IconMaterialDocsAddOnW100;
