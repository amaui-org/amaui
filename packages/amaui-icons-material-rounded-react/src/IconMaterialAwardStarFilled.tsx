import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAwardStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStarFilled'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m614-160-78 77q-23 23-56 23t-56-23l-78-77H240q-33 0-56.5-23.5T160-240v-106l-77-78q-23-23-23-56t23-56l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q23-23 56-23t56 23l78 77h106q33 0 56.5 23.5T800-720v106l77 78q23 23 23 56t-23 56l-77 78v106q0 33-23.5 56.5T720-160H614ZM480-381l77 46q11 7 21.5-.5T586-356l-20-87 68-59q10-9 6-21.5T622-537l-89-7-35-83q-5-12-18-12t-18 12l-35 83-89 7q-14 1-18 13.5t6 21.5l68 59-20 87q-3 13 7.5 20.5t21.5.5l77-46Z"/>
    </Icon>
  );
});

IconMaterialAwardStarFilled.displayName = 'AmauiIconMaterialAwardStarFilled';

export default IconMaterialAwardStarFilled;
