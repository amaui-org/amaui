import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVerticalW100'

      short_name='KeyVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-680q0-16.5 11.75-28.25T500-720q16.5 0 28.25 11.75T540-680q0 16.5-11.75 28.25T500-640q-16.5 0-28.25-11.75T460-680Zm-148 0q0-78.333 54.765-133.167Q421.529-868 499.765-868 578-868 633-813.167 688-758.333 688-680q0 60-33.5 108T568-504v361q0 5.565-2 10.783Q564-127 559-122l-38 38q-5 5-10.133 7-5.134 2-11 2Q494-75 489-77q-5-2-10-7l-71-72q-4.091-3.684-6.545-8.842Q399-170 399-175q0-5 1.5-10t4.5-10l34-45-39-54q-3-4-4-8t-1-9q0-5 1.5-9t3.5-8l32-49v-127q-52-20-86-68t-34-108Zm28 0q0 60 36 101.5t84 52.5v158l-38 57v-.5.5l51 72-47 63h.5-.5l74 74 40-40v-384q48-11 84-52.5T660-680q0-66-47-113t-113-47q-66 0-113 47t-47 113Z"/>
    </Icon>
  );
});

IconMaterialKeyVerticalW100.displayName = 'AmauiIconMaterialKeyVerticalW100';

export default IconMaterialKeyVerticalW100;
