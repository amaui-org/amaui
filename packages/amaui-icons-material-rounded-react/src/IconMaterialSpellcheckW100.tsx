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
      <path d="M14.1 20.85q-.125 0-.225-.038-.1-.037-.175-.112L11 18q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l2.6 2.6 5.45-5.45q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25L14.5 20.7q-.075.075-.175.112-.1.038-.225.038ZM4.475 16q-.2 0-.287-.125-.088-.125-.013-.325l4.4-12.2q.05-.15.2-.25.15-.1.3-.1t.3.1q.15.1.2.25l4.35 12.175q.075.2-.025.338-.1.137-.325.137-.125 0-.225-.075t-.15-.2l-1.25-3.675h-5.8l-1.325 3.7q-.05.1-.137.175Q4.6 16 4.475 16ZM6.4 11.45h5.35L9.05 4H9Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckW100.displayName = 'AmauiIconMaterialSpellcheckW100';

export default IconMaterialSpellcheckW100;
