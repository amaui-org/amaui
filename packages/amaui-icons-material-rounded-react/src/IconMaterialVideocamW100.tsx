import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamW100'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.425 18.7q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.35 0 .575-.225.225-.225.225-.575V6.8q0-.35-.225-.575Q16.175 6 15.825 6h-10.4q-.35 0-.575.225-.225.225-.225.575v10.4q0 .35.225.575.225.225.575.225Zm-.8 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideocamW100.displayName = 'AmauiIconMaterialVideocamW100';

export default IconMaterialVideocamW100;
