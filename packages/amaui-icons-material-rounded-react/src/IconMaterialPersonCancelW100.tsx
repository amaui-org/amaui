import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonCancelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCancelW100'

      short_name='PersonCancel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-559-74 73q-4 4-9.5 4.5t-10.717-4.717Q681-491 681-496q0-5 5-10l74-74-74-73q-5-3.75-5-9.375T685.783-673Q691-678 696-678q5 0 10 5l74 74 73-74q3.75-5 9.375-5T873-673q5 5 5 10t-5 10l-73 73 73 74q4 4 4.5 9.5t-4.5 10.717Q868-481 863-481t-10-5l-73-73Zm-420 47q-44.55 0-76.275-31.725Q252-575.45 252-620q0-44.55 31.725-76.275Q315.45-728 360-728q44.55 0 76.275 31.725Q468-664.55 468-620q0 44.55-31.725 76.275Q404.55-512 360-512ZM92-262v-22q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v22q0 13-8.5 21.5T598-232H122q-13 0-21.5-8.5T92-262Zm28 2h480v-24q0-14-9.5-26.5T564-332q-48-23-99.687-35.5T360-380q-52.626 0-104.313 12.5Q204-355 156-332q-17 9-26.5 21.5T120-284v24Zm240-280q33 0 56.5-23.5T440-620q0-33-23.5-56.5T360-700q-33 0-56.5 23.5T280-620q0 33 23.5 56.5T360-540Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialPersonCancelW100.displayName = 'AmauiIconMaterialPersonCancelW100';

export default IconMaterialPersonCancelW100;
