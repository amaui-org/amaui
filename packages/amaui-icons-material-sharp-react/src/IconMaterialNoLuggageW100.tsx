import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoLuggageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageW100'

      short_name='NoLuggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.7 14.9-.7-.7V8h-6.4l-.7-.7V4.05h4.45V7.3h3.35Zm-2.1-2.1-.7-.7V9.65h.7Zm-3.25-3.15ZM10.6 7.3h3.05V4.75H10.6ZM8.5 20.4q-.3 0-.5-.2t-.2-.5H6.3V7.325h1.025L8 8H7v11h10v-2l.7.7v2h-1.5q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5H9.2q0 .3-.2.5t-.5.2Zm12.8 1.9L2.25 3.25l.5-.5L21.8 21.8ZM8.4 17.35V8.4l.7.7v8.25Zm3.25-5.7.7.7v5h-.7Zm3.25 3.25.7.7v1.75h-.7Zm-1-3.8Zm-1.775 2.025Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageW100.displayName = 'AmauiIconMaterialNoLuggageW100';

export default IconMaterialNoLuggageW100;
