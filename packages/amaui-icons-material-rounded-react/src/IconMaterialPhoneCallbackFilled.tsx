import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneCallbackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneCallbackFilled'

      short_name='PhoneCallback'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.8 11q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q13.375 5 13.8 5t.713.287q.287.288.287.713v1.6l4.3-4.3q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L16.2 9h1.6q.425 0 .713.287.287.288.287.713t-.287.712Q18.225 11 17.8 11Zm6.15 10q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPhoneCallbackFilled.displayName = 'AmauiIconMaterialPhoneCallbackFilled';

export default IconMaterialPhoneCallbackFilled;
