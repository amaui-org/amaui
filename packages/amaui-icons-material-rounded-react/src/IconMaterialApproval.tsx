import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApproval = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Approval'

      short_name='Approval'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 22H6q-.825 0-1.412-.587Q4 20.825 4 20v-4q0-.825.588-1.413Q5.175 14 6 14h12q.825 0 1.413.587Q20 15.175 20 16v4q0 .825-.587 1.413Q18.825 22 18 22Zm-1-4q.425 0 .712-.288Q18 17.425 18 17t-.288-.712Q17.425 16 17 16H7q-.425 0-.713.288Q6 16.575 6 17t.287.712Q6.575 18 7 18Zm-.425-10.4-3.75 5.25q-.15.2-.375.312-.225.113-.45.113t-.45-.113q-.225-.112-.375-.312L7.425 7.6q-.2-.275-.287-.6-.088-.325-.088-.75 0-1.8 1.475-3.025Q10 2 12 2t3.475 1.225Q16.95 4.45 16.95 6.25q0 .425-.087.75-.088.325-.288.6ZM12 11l3-4.2q0-1.2-.887-2Q13.225 4 12 4t-2.113.8Q9 5.6 9 6.8Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialApproval.displayName = 'AmauiIconMaterialApproval';

export default IconMaterialApproval;
