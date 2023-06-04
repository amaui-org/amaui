import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSnippetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetFilled'

      short_name='TextSnippet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h12l6 6v12Zm4-4h10v-2H7Zm0-4h10v-2H7Zm0-4h7V7H7Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetFilled.displayName = 'AmauiIconMaterialTextSnippetFilled';

export default IconMaterialTextSnippetFilled;
