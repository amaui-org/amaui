import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextIncreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncreaseW100Filled'

      short_name='TextIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.325 18.35q-.225 0-.312-.138-.088-.137-.013-.337L6.775 6.45q.075-.15.238-.275.162-.125.337-.125.175 0 .338.125.162.125.237.275l4.75 11.35q.1.225-.012.388-.113.162-.363.162-.1 0-.2-.062-.1-.063-.15-.163l-1.4-3.425h-6.5l-1.425 3.45q-.05.075-.125.138-.075.062-.175.062Zm1.975-4.3h6l-2.9-7.1h-.15Zm14.55 1.3q-.15 0-.25-.1t-.1-.25v-2.65h-2.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19.2V15q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTextIncreaseW100Filled.displayName = 'AmauiIconMaterialTextIncreaseW100Filled';

export default IconMaterialTextIncreaseW100Filled;
