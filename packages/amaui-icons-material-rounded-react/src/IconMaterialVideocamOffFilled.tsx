import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffFilled'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.875 22.65 1.35 4.125q-.275-.275-.275-.675t.3-.7q.275-.275.7-.275.425 0 .7.275L21.3 21.275q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275Zm-1.85-7.475L6.85 4h9.175q.825 0 1.413.588.587.587.587 1.412v4.5l3.15-3.15q.225-.225.538-.113.312.113.312.463v8.6q0 .35-.312.462-.313.113-.538-.112l-3.15-3.15ZM4.025 4l14 14q-.025.8-.625 1.4-.6.6-1.4.6H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.8.612-1.4.613-.6 1.413-.6Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffFilled.displayName = 'AmauiIconMaterialVideocamOffFilled';

export default IconMaterialVideocamOffFilled;
