import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLuggageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageW100'

      short_name='Luggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 19.7q-.625 0-1.062-.438Q6.3 18.825 6.3 18.2V8.65q0-.575.388-.962.387-.388.962-.388h2V4.8q0-.325.213-.538.212-.212.537-.212h3.2q.325 0 .538.212.212.213.212.538v2.5h1.85q.625 0 1.062.437.438.438.438 1.063v9.4q0 .625-.438 1.062-.437.438-1.062.438 0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5H9.2q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5Zm2.55-12.4h3.3V4.75h-3.3ZM7.8 19h8.4q.35 0 .575-.225Q17 18.55 17 18.2V8.8q0-.35-.225-.575Q16.55 8 16.2 8H7.8q-.35 0-.575.225Q7 8.45 7 8.8v9.4q0 .35.225.575Q7.45 19 7.8 19Zm.6-2q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm3.25 0q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm3.25 0q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-7q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25ZM7 19V8v11Z"/>
    </Icon>
  );
});

IconMaterialLuggageW100.displayName = 'AmauiIconMaterialLuggageW100';

export default IconMaterialLuggageW100;
