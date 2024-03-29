import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApprovalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalFilled'

      short_name='Approval'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 22H6q-.825 0-1.412-.587Q4 20.825 4 20v-4q0-.825.588-1.413Q5.175 14 6 14h12q.825 0 1.413.587Q20 15.175 20 16v4q0 .825-.587 1.413Q18.825 22 18 22Zm-1-4q.425 0 .712-.288Q18 17.425 18 17t-.288-.712Q17.425 16 17 16H7q-.425 0-.713.288Q6 16.575 6 17t.287.712Q6.575 18 7 18Zm-.425-10.4-3.75 5.25q-.15.2-.375.312-.225.113-.45.113t-.45-.113q-.225-.112-.375-.312L7.425 7.6q-.2-.3-.312-.65Q7 6.6 7 6.25q0-1.875 1.512-3.062Q10.025 2 12 2t3.488 1.188Q17 4.375 17 6.25q0 .35-.112.7-.113.35-.313.65Z"/>
    </Icon>
  );
});

IconMaterialApprovalFilled.displayName = 'AmauiIconMaterialApprovalFilled';

export default IconMaterialApprovalFilled;
