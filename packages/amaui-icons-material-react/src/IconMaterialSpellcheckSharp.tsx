import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpellcheckSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckSharp'
      short_name='Spellcheck'

      {...props}
    >
      <path d="M14.1 22 9.85 17.75 11.25 16.35 14.1 19.2 19.75 13.55 21.15 14.95ZM3 16 7.85 3H10.2L15.05 16H12.75L11.6 12.7H6.35L5.2 16ZM7.05 10.8H10.95L9.05 5.4H8.95Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckSharp.displayName = 'AmauiIconMaterialSpellcheckSharp';

export default IconMaterialSpellcheckSharp;
