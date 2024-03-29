import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOralDiseaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OralDiseaseFilled'

      short_name='OralDisease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22v-9h2V8.4L3.6 5l4-4L9 2.4 6.4 5 9 7.6V13h2v9Zm8 0v-9h2V9.875q-1.3-.35-2.15-1.4Q12 7.425 12 6q0-1.65 1.175-2.825Q14.35 2 16 2q1.65 0 2.825 1.175Q20 4.35 20 6q0 1.425-.85 2.475T17 9.875V13h2v9Zm3-14q.825 0 1.413-.588Q18 6.825 18 6t-.587-1.412Q16.825 4 16 4q-.825 0-1.412.588Q14 5.175 14 6t.588 1.412Q15.175 8 16 8Z"/>
    </Icon>
  );
});

IconMaterialOralDiseaseFilled.displayName = 'AmauiIconMaterialOralDiseaseFilled';

export default IconMaterialOralDiseaseFilled;
