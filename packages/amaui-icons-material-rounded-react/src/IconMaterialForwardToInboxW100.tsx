import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxW100'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 6H4v11.2q0 .35.225.575Q4.45 18 4.8 18h8.85v.7H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v6.85H20Zm.225 12.7H15.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.75l-2-2q-.1-.1-.112-.25-.013-.15.112-.25.1-.1.25-.1t.25.1l2.3 2.325q.225.225.225.525 0 .3-.225.525l-2.3 2.325q-.1.1-.25.088-.15-.013-.25-.113t-.1-.237q0-.138.1-.238ZM4 6V18v-4.35.2V6Zm8 5 8-5v.575l-7.6 4.75q-.2.125-.4.125t-.4-.125L4 6.575V6Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxW100.displayName = 'AmauiIconMaterialForwardToInboxW100';

export default IconMaterialForwardToInboxW100;
