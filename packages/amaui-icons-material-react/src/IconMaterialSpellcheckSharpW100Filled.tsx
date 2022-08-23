import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpellcheckSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckSharpW100Filled'
      short_name='Spellcheck'

      {...props}
    >
      <path d="M14.1 21.1 10.75 17.75 11.25 17.25 14.1 20.1 19.8 14.4 20.3 14.9ZM4 16 8.7 3H9.45L14.1 16H13.3L11.95 12.05H6.15L4.75 16ZM6.4 11.45H11.75L9.05 4H9Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckSharpW100Filled.displayName = 'AmauiIconMaterialSpellcheckSharpW100Filled';

export default IconMaterialSpellcheckSharpW100Filled;
