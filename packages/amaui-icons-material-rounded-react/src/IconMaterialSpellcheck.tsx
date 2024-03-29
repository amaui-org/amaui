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
      <path d="M14.1 21.7q-.15 0-.275-.05-.125-.05-.25-.175L10.55 18.45q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.15 2.15 4.95-4.95q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-5.825 5.825q-.125.125-.25.175-.125.05-.275.05ZM4.4 16q-.575 0-.838-.375Q3.3 15.25 3.5 14.7L7.45 4.1q.175-.45.625-.775T9.025 3q.5 0 .95.325.45.325.625.775l3.95 10.525q.2.575-.075.975t-.9.4q-.35 0-.662-.225-.313-.225-.438-.55L11.6 12.7H6.35l-.9 2.575q-.125.3-.413.512Q4.75 16 4.4 16Zm2.65-5.2h3.9l-1.9-5.4h-.1Z"/>
    </Icon>
  );
});

IconMaterialSpellcheck.displayName = 'AmauiIconMaterialSpellcheck';

export default IconMaterialSpellcheck;
