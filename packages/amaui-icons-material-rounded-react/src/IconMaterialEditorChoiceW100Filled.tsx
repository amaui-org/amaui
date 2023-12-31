import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditorChoiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditorChoiceW100Filled'

      short_name='EditorChoice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-151-88 31q-5 2-10 2.5t-10 .5q-24 0-42-17t-18-43v-178L192-548q-5-8-7-16t-2-16q0-8 2-16t7-16l116-188q8-14 21.5-21t29.5-7h242q16 0 29.5 7t21.5 21l116 188q5 8 7 16t2 16q0 8-2 16t-7 16L648-355v178q0 26-18 43t-42 17q-5 0-10-.5t-10-2.5l-88-31ZM359-360h242q8 0 15-4t12-11l117-188q5-8 5-17t-5-17L628-785q-5-7-12-11t-15-4H359q-8 0-15 4t-12 11L215-597q-5 8-5 17t5 17l117 188q5 7 12 11t15 4Zm79-133 160-161q4-4 9.5-4t9.5 4q5 4 4.5 10t-4.5 10L459-475q-9 9-21 9t-21-9l-74-73q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l75 75Z"/>
    </Icon>
  );
});

IconMaterialEditorChoiceW100Filled.displayName = 'AmauiIconMaterialEditorChoiceW100Filled';

export default IconMaterialEditorChoiceW100Filled;
