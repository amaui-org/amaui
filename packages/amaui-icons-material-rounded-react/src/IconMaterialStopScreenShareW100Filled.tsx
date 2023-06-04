import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareW100Filled'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.95 17.1-6.025-6.025.6-.65q.025-.025.125-.275 0-.075-.037-.15-.038-.075-.088-.125l-.5-.5q-.2-.2-.437-.088-.238.113-.238.388V9.8h-.7l-4.9-4.9H19.2q.65 0 1.075.425.425.425.425 1.075v9.4q0 .35-.162.712-.163.363-.588.588Zm1.2 5.05L18 19H2.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H17.3l-1-1H4.8q-.65 0-1.075-.425Q3.3 16.45 3.3 15.8V6.4q0-.425.225-.763Q3.75 5.3 4.1 5.1L1.85 2.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l19.3 19.3q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-11.8-8q.15 0 .25-.1t.1-.25v-1.65q0-.35.1-.6t.3-.475l-.475-.475q-.225.225-.425.625-.2.4-.2.925v1.65q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareW100Filled.displayName = 'AmauiIconMaterialStopScreenShareW100Filled';

export default IconMaterialStopScreenShareW100Filled;
