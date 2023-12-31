import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book2W100'

      short_name='Book2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-132q-39 0-66.5-27.5T212-226v-488q0-48 33-81t81-33h422v536q-27 0-46.5 19.5T682-226q0 27 19.5 46.5T748-160v28H306Zm-66-161q13-13 29.5-20t36.5-7h34v-480h-14q-35 0-60.5 25.5T240-714v421Zm128-27h352v-480H368v480Zm-128 27v-487 487Zm66 133h375q-13-13-20-29.5t-7-36.5q0-19 7-36t20-30H306q-28 0-47 19.5T240-226q0 28 19 47t47 19Z"/>
    </Icon>
  );
});

IconMaterialBook2W100.displayName = 'AmauiIconMaterialBook2W100';

export default IconMaterialBook2W100;
