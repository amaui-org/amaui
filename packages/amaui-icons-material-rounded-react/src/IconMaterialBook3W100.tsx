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
      <path d="M306-132q-39 0-66.5-27.5T212-226v-488q0-48 33-81t81-33h362q25 0 42.5 17.5T748-768v461q0 6-4 10.5t-9 5.5q-23 5-38 23t-15 42q0 23 14.5 41.5T734-161q6 2 10 5.5t4 9.5q0 6-4 10t-10 4H306Zm-66-161q13-13 30-20t36-7h414v-448q0-14-9-23t-23-9H326q-35 0-60.5 25.5T240-714v421Zm177-220h125l20 53q2 4 5 6t7 2q7 0 10.5-5.5T586-469l-86-229q-2-5-6-7.5t-9-2.5h-11q-5 0-9 2.5t-6 7.5l-86 228q-2 7 1.5 12.5T385-452q4 0 7-2t5-6l20-53Zm10-27 53-140 52 140H427ZM240-293v-487 487Zm66 133h375q-13-13-20-29.5t-7-36.5q0-19 7-36t20-30H306q-28 0-47 19.5T240-226q0 28 19 47t47 19Z"/>
    </Icon>
  );
});

IconMaterialBook3W100.displayName = 'AmauiIconMaterialBook3W100';

export default IconMaterialBook3W100;
