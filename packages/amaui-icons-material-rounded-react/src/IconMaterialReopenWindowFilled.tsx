import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReopenWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReopenWindowFilled'

      short_name='ReopenWindow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v240q0 17-11.5 28.5T840 616q-17 0-28.5-11.5T800 576V416H160v400h280q17 0 28.5 11.5T480 856q0 17-11.5 28.5T440 896H160Zm600 160q-57 0-104-28.5T583 951q-7-12-2.5-25.5T598 907q11-5 22 0t17 16q18 33 51 53t72 20q58 0 99-41t41-99q0-58-41-99t-99-41q-28 0-53 10t-45 30h28q13 0 21.5 8.5T720 786q0 13-8.5 21.5T690 816h-90q-17 0-28.5-11.5T560 776v-90q0-13 8.5-21.5T590 656q13 0 21.5 8.5T620 686v27q29-27 65-42t75-15q83 0 141.5 58.5T960 856q0 83-58.5 141.5T760 1056Z"/>
    </Icon>
  );
});

IconMaterialReopenWindowFilled.displayName = 'AmauiIconMaterialReopenWindowFilled';

export default IconMaterialReopenWindowFilled;
