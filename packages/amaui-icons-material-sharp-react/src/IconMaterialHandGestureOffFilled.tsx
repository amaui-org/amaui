import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandGestureOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureOffFilled'

      short_name='HandGestureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-714-80-80v-46h80v126Zm160 160-80-80v-286h80v366ZM680-40H413q-29 0-54-15.5T313-92L39-364l94-74 147 73v-202L27-820l57-57L876-85l-57 57-44-44q-20 15-44 23.5T680-40Zm200-719q0-51-35-86t-86-35v-60q75 0 128 53t53 128h-60ZM240-40q-83 0-141.5-58.5T40-240h60q0 58 41 99t99 41v60Zm600-194L600-473v-407h80v407h80v-327h80v566Z"/>
    </Icon>
  );
});

IconMaterialHandGestureOffFilled.displayName = 'AmauiIconMaterialHandGestureOffFilled';

export default IconMaterialHandGestureOffFilled;
