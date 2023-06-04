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
      <path d="M6.3 19.7V7.3h3.35V4.05h4.7V7.3h3.35v12.4h-1.5q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5H9.2q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5Zm4.05-12.4h3.3V4.75h-3.3ZM7 19h10V8H7Zm1.4-1.65h.7v-7.7h-.7Zm3.25 0h.7v-7.7h-.7Zm3.25 0h.7v-7.7h-.7ZM7 19V8Z"/>
    </Icon>
  );
});

IconMaterialLuggageW100.displayName = 'AmauiIconMaterialLuggageW100';

export default IconMaterialLuggageW100;
