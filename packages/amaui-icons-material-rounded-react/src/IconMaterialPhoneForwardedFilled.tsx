import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneForwardedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneForwardedFilled'

      short_name='PhoneForwarded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.3 9.375q-.3-.3-.3-.713 0-.412.3-.712l.9-.9h-4.15q-.425 0-.712-.288-.288-.287-.288-.712t.288-.712q.287-.288.712-.288h4.15l-.9-.9q-.3-.3-.287-.7.012-.4.287-.7.3-.3.713-.313.412-.012.712.288L21.35 5.35q.15.15.212.325.063.175.063.375t-.063.375q-.062.175-.212.325L18.7 9.4q-.3.3-.7.288-.4-.013-.7-.313ZM19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPhoneForwardedFilled.displayName = 'AmauiIconMaterialPhoneForwardedFilled';

export default IconMaterialPhoneForwardedFilled;
