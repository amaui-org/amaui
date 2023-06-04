import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPianoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoW100Filled'

      short_name='Piano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h2.975v-4.9h-.45q-.35 0-.575-.225-.225-.225-.225-.575V5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19Zm9.425 0H18.2q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-1.725v8.3q0 .35-.225.575-.225.225-.575.225h-.45Zm-5.75 0h5.05v-4.9h-.45q-.35 0-.575-.225-.225-.225-.225-.575V5h-2.55v8.3q0 .35-.225.575-.225.225-.575.225h-.45Z"/>
    </Icon>
  );
});

IconMaterialPianoW100Filled.displayName = 'AmauiIconMaterialPianoW100Filled';

export default IconMaterialPianoW100Filled;
