import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpokeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeFilled'

      short_name='Spoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11q-1.65 0-2.825-1.175Q8 8.65 8 7q0-1.65 1.175-2.825Q10.35 3 12 3q1.65 0 2.825 1.175Q16 5.35 16 7q0 1.65-1.175 2.825Q13.65 11 12 11ZM7 21q-1.65 0-2.825-1.175Q3 18.65 3 17q0-1.65 1.175-2.825Q5.35 13 7 13q1.65 0 2.825 1.175Q11 15.35 11 17q0 1.65-1.175 2.825Q8.65 21 7 21Zm10 0q-1.65 0-2.825-1.175Q13 18.65 13 17q0-1.65 1.175-2.825Q15.35 13 17 13q1.65 0 2.825 1.175Q21 15.35 21 17q0 1.65-1.175 2.825Q18.65 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialSpokeFilled.displayName = 'AmauiIconMaterialSpokeFilled';

export default IconMaterialSpokeFilled;
