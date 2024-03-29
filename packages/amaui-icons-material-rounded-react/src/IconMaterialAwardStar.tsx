import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAwardStar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStar'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m614-160-78 77q-23 23-56 23t-56-23l-78-77H240q-33 0-56.5-23.5T160-240v-106l-77-78q-23-23-23-56t23-56l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q23-23 56-23t56 23l78 77h106q33 0 56.5 23.5T800-720v106l77 78q23 23 23 56t-23 56l-77 78v106q0 33-23.5 56.5T720-160H614ZM480-480Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-241 76 46q11 7 22-.5t8-20.5l-20-87 68-59q10-9 6-21.5T622-537l-89-7-35-82q-5-12-18-12t-18 12l-35 82-89 7q-14 1-18 13.5t6 21.5l68 59-20 87q-3 13 8 20.5t22 .5l76-46Z"/>
    </Icon>
  );
});

IconMaterialAwardStar.displayName = 'AmauiIconMaterialAwardStar';

export default IconMaterialAwardStar;
