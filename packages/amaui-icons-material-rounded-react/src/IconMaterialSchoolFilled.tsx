import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchoolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolFilled'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 17q-.425 0-.712-.288Q21 16.425 21 16v-5.9l-8.025 4.375q-.225.125-.463.187-.237.063-.512.063t-.512-.063q-.238-.062-.463-.187L2.6 9.875q-.25-.125-.387-.363-.138-.237-.138-.512t.138-.512q.137-.238.387-.363l8.45-4.6q.225-.125.462-.188.238-.062.488-.062t.488.062q.237.063.462.188l9.525 5.2q.25.125.388.362.137.238.137.513V16q0 .425-.288.712Q22.425 17 22 17Zm-10 3.725q-.25 0-.488-.062-.237-.063-.462-.188l-5-2.7q-.5-.275-.775-.737Q5 16.575 5 16v-3.8l5.675 3.075q.325.175.65.312.325.138.675.138.35 0 .688-.15.337-.15.662-.325L19 12.2V16q0 .575-.275 1.038-.275.462-.775.737l-5 2.7q-.225.125-.462.188-.238.062-.488.062Z"/>
    </Icon>
  );
});

IconMaterialSchoolFilled.displayName = 'AmauiIconMaterialSchoolFilled';

export default IconMaterialSchoolFilled;
