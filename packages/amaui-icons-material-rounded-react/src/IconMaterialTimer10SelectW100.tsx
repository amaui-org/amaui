import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer10SelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectW100'

      short_name='Timer10Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 17.15h3.7q.35 0 .575-.225.225-.225.225-.575v-8.7q0-.35-.225-.575-.225-.225-.575-.225H9.4q-.35 0-.575.225Q8.6 7.3 8.6 7.65v8.7q0 .35.225.575.225.225.575.225Zm0 .7q-.65 0-1.075-.425Q7.9 17 7.9 16.35v-8.7q0-.65.425-1.075Q8.75 6.15 9.4 6.15h3.7q.65 0 1.075.425Q14.6 7 14.6 7.65v8.7q0 .65-.425 1.075-.425.425-1.075.425Zm-5.15 0q-.15 0-.25-.1t-.1-.25V6.85H2.25q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H3.9q.275 0 .488.212.212.213.212.488V17.5q0 .15-.1.25t-.25.1Zm13.5 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.65v-2.3h-3.3q-.3 0-.5-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h3.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H18.1v2.3h3.3q.3 0 .5.2t.2.5v2.3q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialTimer10SelectW100.displayName = 'AmauiIconMaterialTimer10SelectW100';

export default IconMaterialTimer10SelectW100;
