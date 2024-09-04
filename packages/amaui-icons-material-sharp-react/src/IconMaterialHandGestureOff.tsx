import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandGestureOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureOff'

      short_name='HandGestureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m840-234-80-80v-486h80v566ZM520-554l-80-80v-286h80v366Zm160 81h-80v-407h80v407Zm37 343L360-487v252l-158-79 177 176q8 7 16 12.5t18 5.5h267q10 0 19.5-2.5T717-130ZM413-40q-24 0-46-9t-39-26L39-364l94-74 147 73v-202L27-820l57-57L876-85l-57 57-44-44q-20 15-44 23.5T680-40H413Zm187-433Zm280-286q0-51-35-86t-86-35v-60q75 0 128 53t53 128h-60ZM240-40q-83 0-141.5-58.5T40-240h60q0 58 41 99t99 41v60Zm304-264ZM360-714l-80-80v-46h80v126Z"/>
    </Icon>
  );
});

IconMaterialHandGestureOff.displayName = 'AmauiIconMaterialHandGestureOff';

export default IconMaterialHandGestureOff;
