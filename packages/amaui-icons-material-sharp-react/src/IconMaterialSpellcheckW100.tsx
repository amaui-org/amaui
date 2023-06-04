import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpellcheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckW100'

      short_name='Spellcheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.1 21.1-3.35-3.35.5-.5 2.85 2.85 5.7-5.7.5.5ZM4 16 8.7 3h.75l4.65 13h-.8l-1.35-3.95h-5.8L4.75 16Zm2.4-4.55h5.35L9.05 4H9Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckW100.displayName = 'AmauiIconMaterialSpellcheckW100';

export default IconMaterialSpellcheckW100;
