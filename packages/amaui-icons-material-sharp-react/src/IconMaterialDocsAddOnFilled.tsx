import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDocsAddOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAddOnFilled'

      short_name='DocsAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 20.975v-3h-3v-2h3v-3h2v3h3v2h-3v3ZM4 18v-2h7.075q-.075.525-.063 1 .013.475.088 1Zm0-4v-2h9.65q-.575.4-1.037.9-.463.5-.813 1.1Zm0-4V8h15v2Zm0-4V4h15v2Z"/>
    </Icon>
  );
});

IconMaterialDocsAddOnFilled.displayName = 'AmauiIconMaterialDocsAddOnFilled';

export default IconMaterialDocsAddOnFilled;
