import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffW100Filled'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.825 20 3.2 4.375q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125L19.35 19.525q.1.1.1.225t-.125.25q-.125.125-.25.113-.125-.013-.25-.113Zm-1.4-5.25L7.975 5.3h7.95q.65 0 1.075.425.425.425.425 1.075v4.7L19.5 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.425 12.5Zm-12.25-9.4 12.2 12.2q-.025.5-.5.825-.475.325-.975.325H5.5q-.65 0-1.075-.425Q4 17.85 4 17.2V6.8q0-.5.325-.975t.85-.475Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffW100Filled.displayName = 'AmauiIconMaterialVideocamOffW100Filled';

export default IconMaterialVideocamOffW100Filled;
