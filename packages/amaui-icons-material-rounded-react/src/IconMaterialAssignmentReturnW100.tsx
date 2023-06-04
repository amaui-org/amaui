import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentReturnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnW100'

      short_name='AssignmentReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.25 12.35h4.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.5l2-2q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-2.325 2.325Q9.2 11.7 9.2 12q0 .3.225.525l2.325 2.325q.125.125.25.125t.25-.125q.125-.125.125-.25t-.125-.25ZM5.8 19h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 5V19 5Zm.8 14.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.2-.637.8 0 1.225.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnW100.displayName = 'AmauiIconMaterialAssignmentReturnW100';

export default IconMaterialAssignmentReturnW100;
