import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyringeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyringeW100'

      short_name='Syringe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M224 518q-4-4-4-9.5t4-10.5l95-95-59-58-30 30q-5 5-10.5 5t-9.5-5q-5-4-5-9.5t5-10.5l80-79q4-5 9.5-5t10.5 5q4 4 4 9.5t-4 9.5l-31 31 59 58 95-95q5-5 10.5-5t9.5 5q5 4 5 9.5t-5 10.5l-21 21 265 265q18 18 18 43t-18 42l-31 31 140 140q4 4 2 8.5t-7 4.5h-10q-6 0-11-2t-10-7L646 731l-31 31q-17 17-42 17t-43-17L265 497l-21 21q-5 5-10 5t-10-5Zm60-40 265 265q10 9 23 9t23-9l82-83q10-9 10-22.5T677 615l-56-57-63 63q-5 5-10 5t-9-4q-5-4-5-9.5t5-10.5l63-63-91-90-63 63q-4 4-9.5 4t-10.5-4q-4-5-4-10.5t4-9.5l63-63-79-79-128 128Zm0 0 6.5-6.5L307 455l83-83 15.5-15.5 6.5-6.5-128 128Z"/>
    </Icon>
  );
});

IconMaterialSyringeW100.displayName = 'AmauiIconMaterialSyringeW100';

export default IconMaterialSyringeW100;
