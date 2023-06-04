import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpellcheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spellcheck'

      short_name='Spellcheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.1 22-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4ZM3 16 7.85 3h2.35l4.85 13h-2.3l-1.15-3.3H6.35L5.2 16Zm4.05-5.2h3.9l-1.9-5.4h-.1Z"/>
    </Icon>
  );
});

IconMaterialSpellcheck.displayName = 'AmauiIconMaterialSpellcheck';

export default IconMaterialSpellcheck;
