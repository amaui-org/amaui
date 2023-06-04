import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookW100'

      short_name='LaptopChromebook'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 17.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H3.3V5.7q0-.275.213-.487Q3.725 5 4 5h16q.275 0 .488.213.212.212.212.487v11.4h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8.7-.7h3.3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4 15.7h16v-10H4Zm0 0v-10 10Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookW100.displayName = 'AmauiIconMaterialLaptopChromebookW100';

export default IconMaterialLaptopChromebookW100;
