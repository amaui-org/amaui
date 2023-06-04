import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCountertopsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CountertopsW100Filled'

      short_name='Countertops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 17.3v-5.75H5.1v-.7h2.75q-.475 0-.813-.338Q6.7 10.175 6.7 9.7v-3h3.9v3q0 .475-.337.812-.338.338-.813.338H15v-2.2q0-.525-.363-.888-.362-.362-.887-.362-.4 0-.725.225-.325.225-.45.575h-.725q.15-.65.675-1.075.525-.425 1.225-.425.825 0 1.388.562.562.563.562 1.388v2.2h3.2v.7h-1.6v5.75Zm4.95-.7h.7v-5.05h-.7Z"/>
    </Icon>
  );
});

IconMaterialCountertopsW100Filled.displayName = 'AmauiIconMaterialCountertopsW100Filled';

export default IconMaterialCountertopsW100Filled;
