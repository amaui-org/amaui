import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCall'

      short_name='VideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16q.425 0 .713-.288Q11 15.425 11 15v-2h2q.425 0 .713-.288Q14 12.425 14 12t-.287-.713Q13.425 11 13 11h-2V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9v2H7q-.425 0-.713.287Q6 11.575 6 12t.287.712Q6.575 13 7 13h2v2q0 .425.288.712Q9.575 16 10 16Zm-6 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.225-.225.538-.113Q22 7.35 22 7.7v8.6q0 .35-.312.462-.313.113-.538-.112L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Zm0-2h12V6H4v12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCall.displayName = 'AmauiIconMaterialVideoCall';

export default IconMaterialVideoCall;
