import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentLateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentLateW100'

      short_name='AssignmentLate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.362-.138-.138-.363-.138-.2 0-.35.138-.15.137-.15.362 0 .2.15.35.15.15.35.15Zm-.35-2.65h.7V7.6h-.7ZM5 19h14V5H5Zm-.7.7V4.3h6.35q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialAssignmentLateW100.displayName = 'AmauiIconMaterialAssignmentLateW100';

export default IconMaterialAssignmentLateW100;
