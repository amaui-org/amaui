import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffW100Filled'

      short_name='VisibilityOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.7 20.7-3.8-3.8q-.6.3-1.612.55-1.013.25-2.288.25-3.125 0-5.725-1.7-2.6-1.7-3.875-4.5Q3 10.175 4 9.012 5 7.85 6.1 7.1L3.3 4.3l.5-.5 16.4 16.4ZM12 14.9q.375 0 .85-.1t.7-.25l-4.6-4.6q-.15.275-.25.738-.1.462-.1.812 0 1.425.988 2.412.987.988 2.412.988Zm6.4.6-3.075-3.05q.025-.15.05-.4t.025-.55q0-1.425-.987-2.413Q13.425 8.1 12 8.1q-.3 0-.525.037-.225.038-.4.113L8.65 5.85q.825-.3 1.675-.425Q11.175 5.3 12 5.3q3.1 0 5.725 1.7 2.625 1.7 3.875 4.5-.525 1.125-1.312 2.125-.788 1-1.888 1.875Zm-3.7-3.65-3.025-3q.6-.125 1.188.075.587.2 1.012.625.45.425.675 1.025.225.6.15 1.275Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffW100Filled.displayName = 'AmauiIconMaterialVisibilityOffW100Filled';

export default IconMaterialVisibilityOffW100Filled;
