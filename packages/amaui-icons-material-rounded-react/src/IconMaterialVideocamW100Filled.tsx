import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamW100Filled'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.425 18.7q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialVideocamW100Filled.displayName = 'AmauiIconMaterialVideocamW100Filled';

export default IconMaterialVideocamW100Filled;
