import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowmobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowmobileW100Filled'

      short_name='Snowmobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23.25 17.85q-.325.7-.962 1.1-.638.4-1.338.4h-5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.55l-3.55-3.3H11.1q0 1.85-1.225 2.925Q8.65 19.35 6.7 19.35H1.95q-.65 0-1-.425T.6 18q0-.35.188-.663.187-.312.537-.512l4.95-2.7L1.55 12.8q-.275-.075-.375-.312-.1-.238.025-.513l.4-.85q.125-.275.425-.437.3-.163.6-.113l8.85 1.025 4.15-3.225L13.45 6.35h-2q-.15 0-.25-.1T11.1 6q0-.15.1-.25t.25-.1h1.975q.15 0 .275.05.125.05.25.15l7 6.525q.2.175.275.4.075.225.075.475 0 .65-1.275 1.375t-2.7.725h-.35l3.55 3.3h.425q.45 0 .9-.263.45-.262.725-.762.05-.1.15-.163.1-.062.2-.062.2 0 .3.138.1.137.025.312Zm-21.3.8H6.7q1.65 0 2.675-.875T10.4 15.3l-3.175-.9-5.35 2.9q-.225.125-.4.275-.175.15-.175.425t.188.462q.187.188.462.188Z"/>
    </Icon>
  );
});

IconMaterialSnowmobileW100Filled.displayName = 'AmauiIconMaterialSnowmobileW100Filled';

export default IconMaterialSnowmobileW100Filled;
