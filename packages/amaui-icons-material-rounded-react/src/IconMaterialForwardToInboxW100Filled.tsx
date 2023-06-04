import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxW100Filled'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v7.325q-.575-.275-1.037-.375-.463-.1-1.088-.1-2.05 0-3.487 1.437-1.438 1.438-1.438 3.488v.125ZM12 11 4.675 6.2q-.1-.1-.25-.075-.15.025-.225.15-.075.125-.05.275.025.15.15.225l7.3 4.775q.2.125.4.125t.4-.125l7.3-4.775q.125-.075.15-.225.025-.15-.05-.275-.075-.125-.212-.15-.138-.025-.263.05Zm8.225 7.7H15.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.75l-2-2q-.1-.1-.112-.25-.013-.15.112-.25.1-.1.25-.1t.25.1l2.3 2.325q.225.225.225.525 0 .3-.225.525l-2.3 2.325q-.1.1-.25.088-.15-.013-.25-.113t-.1-.237q0-.138.1-.238Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxW100Filled.displayName = 'AmauiIconMaterialForwardToInboxW100Filled';

export default IconMaterialForwardToInboxW100Filled;
