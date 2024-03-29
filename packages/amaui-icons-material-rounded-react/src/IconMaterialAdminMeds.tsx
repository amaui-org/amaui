import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdminMeds = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMeds'

      short_name='AdminMeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 16.5q-1 1-2.425 1-1.425 0-2.425-1-1-1-1-2.413 0-1.412 1-2.412L11.65 7.5q1-1 2.425-1 1.425 0 2.425 1 1 1 1 2.412 0 1.413-1 2.413ZM8.9 15.075q.575.575 1.188.413.612-.163.837-.388l1.375-1.4-2-2-1.4 1.375q-.425.425-.425 1t.425 1Zm6.2-6.15q-.575-.575-1.187-.413-.613.163-.838.388L11.7 10.3l2 2 1.4-1.375q.425-.425.425-1t-.425-1ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm7-14.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialAdminMeds.displayName = 'AmauiIconMaterialAdminMeds';

export default IconMaterialAdminMeds;
