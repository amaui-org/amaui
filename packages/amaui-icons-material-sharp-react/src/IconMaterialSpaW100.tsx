import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaW100'

      short_name='Spa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.45 20.65q-1.475-.175-2.937-.762Q8.05 19.3 6.85 18.163q-1.2-1.138-2.012-2.888-.813-1.75-.988-4.225l-.05-.75.7.05q.975.075 2.438.588Q8.4 11.45 9.35 12.2q.075-1.8.8-3.825Q10.875 6.35 12 4.95q1.125 1.4 1.85 3.45.725 2.05.8 3.85.875-.675 2.288-1.25 1.412-.575 2.512-.65l.75-.05-.05.8q-.1 1.775-.575 3.263-.475 1.487-1.4 2.675-.925 1.187-2.325 2.087-1.4.9-3.4 1.525Zm0-.7q-.275-4.15-2.462-6.275Q7.8 11.55 4.55 11.05q.275 4.275 2.538 6.375 2.262 2.1 5.362 2.525ZM12 15.3q.325-.65.85-1.362.525-.713 1.1-1.188 0-1.575-.512-3.288Q12.925 7.75 12 6.2q-.925 1.55-1.438 3.262-.512 1.713-.512 3.288.575.475 1.087 1.188.513.712.863 1.362Zm1.15 4.35q1.25-.425 2.35-1.1t1.95-1.7q.85-1.025 1.375-2.45.525-1.425.625-3.35-2.45.35-4.375 1.75-1.925 1.4-2.725 3.4.3.8.488 1.575.187.775.312 1.875ZM12 15.3Zm1.15 4.35Zm-.7.3Zm-.1-3.75Zm.1 4.45Z"/>
    </Icon>
  );
});

IconMaterialSpaW100.displayName = 'AmauiIconMaterialSpaW100';

export default IconMaterialSpaW100;
