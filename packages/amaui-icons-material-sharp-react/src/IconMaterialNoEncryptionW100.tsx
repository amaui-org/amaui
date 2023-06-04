import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoEncryptionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionW100'

      short_name='NoEncryption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.7 17.65-.7-.7V10h-6.95l-.7-.7H15v-2q0-1.275-.912-2.138Q13.175 4.3 11.9 4.3q-1.275 0-2.187.875Q8.8 6.05 8.8 7.3v.3l-.65-.65q.125-1.425 1.188-2.388Q10.4 3.6 11.9 3.6q1.575 0 2.688 1.075Q15.7 5.75 15.7 7.3v2h3Zm1.8 5.65-2.6-2.6H5.3V9.35h1.25L.7 3.5l.5-.5L21 22.8ZM17.15 20l-4.125-4.175q-.2.2-.45.3-.25.1-.525.1-.575 0-.962-.387-.388-.388-.388-.963 0-.275.1-.525t.3-.45L7.15 10H6v10Zm-5-5Zm2.375-1.525Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionW100.displayName = 'AmauiIconMaterialNoEncryptionW100';

export default IconMaterialNoEncryptionW100;
