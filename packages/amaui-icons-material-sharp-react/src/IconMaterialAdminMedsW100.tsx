import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdminMedsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMedsW100'

      short_name='AdminMeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.425 15.575q-.65.625-1.512.613-.863-.013-1.488-.613-.6-.625-.613-1.488-.012-.862.613-1.487l4.15-4.175Q13.2 7.8 14.088 7.8q.887 0 1.512.625t.612 1.487q-.012.863-.612 1.488Zm-2.525-.5q.575.575 1.188.413.612-.163.837-.388l1.825-1.85-2-2-1.85 1.825q-.425.425-.425 1t.425 1Zm6.2-6.15q-.575-.575-1.187-.413-.613.163-.838.388l-1.825 1.85 2 2 1.85-1.825q.425-.425.425-1t-.425-1ZM4.3 19.7V4.3h6.35q-.275-.725.15-1.363.425-.637 1.2-.637.8 0 1.225.637.425.638.125 1.363h6.35v15.4ZM5 19h14V5H5Zm7-14.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialAdminMedsW100.displayName = 'AmauiIconMaterialAdminMedsW100';

export default IconMaterialAdminMedsW100;
