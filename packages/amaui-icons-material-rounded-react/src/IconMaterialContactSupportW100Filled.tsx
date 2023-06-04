import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactSupportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportW100Filled'

      short_name='ContactSupport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.3 19.75V17.7h-1.8q-3 0-5.1-2.1-2.1-2.1-2.1-5.1 0-3 2.1-5.1 2.1-2.1 5.1-2.1 1.5 0 2.812.562 1.313.563 2.288 1.538.975.975 1.537 2.288Q18.7 9 18.7 10.5q0 2.85-1.512 5.25-1.513 2.4-3.888 4Zm-1.75-4.3q.275 0 .463-.188.187-.187.187-.462t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.462q.187.188.462.188Zm0-2.85q.125 0 .25-.1t.15-.25q.075-.425.312-.763.238-.337.838-.937.425-.425.662-.85.238-.425.238-1 0-1.025-.712-1.638-.713-.612-1.738-.612-.75 0-1.312.375-.563.375-.913.9Q9.25 7.85 9.3 8q.05.15.2.2.125.05.25 0t.2-.175q.225-.35.612-.613.388-.262.988-.262.9 0 1.325.487.425.488.425 1.063 0 .525-.262.875-.263.35-.688.775-.575.5-.825.95-.25.45-.3.95-.025.125.075.238.1.112.25.112Z"/>
    </Icon>
  );
});

IconMaterialContactSupportW100Filled.displayName = 'AmauiIconMaterialContactSupportW100Filled';

export default IconMaterialContactSupportW100Filled;
