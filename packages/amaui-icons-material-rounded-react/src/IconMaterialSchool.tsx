import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='School'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.725q-.25 0-.488-.062-.237-.063-.462-.188l-5-2.7q-.5-.275-.775-.737Q5 16.575 5 16v-4.8L2.6 9.875q-.275-.15-.4-.375T2.075 9q0-.275.125-.5.125-.225.4-.375l8.45-4.6q.225-.125.462-.188.238-.062.488-.062t.488.062q.237.063.462.188l9.525 5.2q.25.125.388.362.137.238.137.513V16q0 .425-.288.712Q22.425 17 22 17t-.712-.288Q21 16.425 21 16v-5.9l-2 1.1V16q0 .575-.275 1.038-.275.462-.775.737l-5 2.7q-.225.125-.462.188-.238.062-.488.062Zm0-8.025L18.85 9 12 5.3 5.15 9Zm0 6.025 5-2.7V12.25l-4.025 2.225q-.225.125-.475.187-.25.063-.5.063t-.5-.063q-.25-.062-.475-.187L7 12.25v3.775Zm0-6.025Zm0 3.025Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSchool.displayName = 'AmauiIconMaterialSchool';

export default IconMaterialSchool;
