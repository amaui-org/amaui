import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentAddFilled'

      short_name='AssignmentAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 4.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM18 23q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5ZM7 9h10V7H7Zm4.675 12H3V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v8.7q-.725-.35-1.462-.525Q18.8 11 18 11q-.275 0-.512.012-.238.013-.488.063V11H7v2h6.125q-.45.425-.813.925-.362.5-.637 1.075H7v2h4.075q-.05.25-.063.488Q11 17.725 11 18q0 .825.15 1.538.15.712.525 1.462Z"/>
    </Icon>
  );
});

IconMaterialAssignmentAddFilled.displayName = 'AmauiIconMaterialAssignmentAddFilled';

export default IconMaterialAssignmentAddFilled;
