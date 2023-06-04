import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentAddW100Filled'

      short_name='AssignmentAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm6 17.35q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85Zm-.35-.85h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5Zm-10-12.35h8.7v-.7h-8.7Zm3.825 11.05H4.3V4.3h6.35q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h6.35v7.225q-.425-.1-.85-.163-.425-.062-.85-.062-.575 0-1.125.1t-1.075.275v-.025H7.65v.7h6.725q-.85.55-1.488 1.312-.637.763-1.037 1.688h-4.2v.7h3.925q-.125.475-.2.962-.075.488-.075.988 0 .35.025.85t.15.85Z"/>
    </Icon>
  );
});

IconMaterialAssignmentAddW100Filled.displayName = 'AmauiIconMaterialAssignmentAddW100Filled';

export default IconMaterialAssignmentAddW100Filled;
