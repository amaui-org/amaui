import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book3W100'

      short_name='Book3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-132q-39 0-66.5-27.5T212-226v-488q0-47 33-80.5t81-33.5h422v536q-28 0-47 19.5T682-226q0 28 19 47t47 19v28H306Zm0-28h375q-13-13-20-29.5t-7-36.5q0-19 7-36t20-30H306q-28 0-47 19.5T240-226q0 28 19 47t47 19Zm-66-133q13-13 29.5-20t36.5-7h414v-480H326q-36 0-61 25.5T240-714v421Zm126-159h28l23-61h125l23 61h27l-96-256h-33l-97 256Zm61-88 53-140 52 140H427ZM240-293v-487 487Z"/>
    </Icon>
  );
});

IconMaterialBook3W100.displayName = 'AmauiIconMaterialBook3W100';

export default IconMaterialBook3W100;
