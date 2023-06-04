import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZonePersonAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonAlertW100'

      short_name='ZonePersonAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V15H4v2.2q0 .3.25.55.25.25.55.25H7v.7Zm4.8-3.5 1.05-5.4-3.3 1.375v3.175h-.7V10.7l4-1.65q.575-.225.85-.313.275-.087.5-.087.35 0 .65.187.3.188.5.513l.675 1.1q-1.05.85-1.65 2.075-.6 1.225-.625 2.675Zm3.9-8.1q-.675 0-1.137-.463Q11.9 6.175 11.9 5.5t.463-1.138Q12.825 3.9 13.5 3.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463ZM3.3 5V2.8q0-.65.425-1.075Q4.15 1.3 4.8 1.3H7V2H4.8q-.3 0-.55.25Q4 2.5 4 2.8V5ZM20 5V2.8q0-.3-.25-.55Q19.5 2 19.2 2H17v-.7h2.2q.65 0 1.075.425.425.425.425 1.075V5Zm-2.25 13.925q-1.55 0-2.625-1.075t-1.075-2.625q0-1.55 1.075-2.625t2.625-1.075q1.55 0 2.625 1.075t1.075 2.625q0 1.55-1.075 2.625t-2.625 1.075Zm-.35-3.2h.7v-2.7h-.7Zm.35 1.8q.2 0 .325-.125t.125-.325q0-.2-.125-.325t-.325-.125q-.2 0-.325.125t-.125.325q0 .2.125.325t.325.125Z"/>
    </Icon>
  );
});

IconMaterialZonePersonAlertW100.displayName = 'AmauiIconMaterialZonePersonAlertW100';

export default IconMaterialZonePersonAlertW100;
