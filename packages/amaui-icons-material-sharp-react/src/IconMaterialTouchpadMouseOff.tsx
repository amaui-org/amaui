import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseOff'

      short_name='TouchpadMouseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-359Zm0 0ZM819-28 27-820l57-57L876-85l-57 57ZM660-359Zm0 0Zm0 279q-92 0-156-64t-64-156v-120q0-23 4.5-43.5T457-504l144 144h-81v60q0 58 41 99t99 41q29 0 54.5-11t44.5-31l57 57q-30 30-70 47.5T660-80Zm202-133-64-64q1-6 1.5-11.5t.5-11.5v-60h-85l-95-95v-99q-17 5-32.5 14.5T559-516l-57-57q30-31 70.5-49t87.5-18q92 0 156 64t64 156v120q0 23-5 45t-13 42ZM700-440h99q-6-41-33.5-72T700-554v114ZM397-564ZM80-160v-640h81l80 80h-81v480h206q5 21 11.5 41t16.5 39H80Zm275-560-80-80h605v80H355Zm96 96Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseOff.displayName = 'AmauiIconMaterialTouchpadMouseOff';

export default IconMaterialTouchpadMouseOff;
