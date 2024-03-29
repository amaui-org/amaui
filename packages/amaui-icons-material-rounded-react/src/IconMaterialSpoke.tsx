import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpoke = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spoke'

      short_name='Spoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11q-1.65 0-2.825-1.175Q8 8.65 8 7q0-1.65 1.175-2.825Q10.35 3 12 3q1.65 0 2.825 1.175Q16 5.35 16 7q0 1.65-1.175 2.825Q13.65 11 12 11Zm0-2q.825 0 1.413-.588Q14 7.825 14 7t-.587-1.412Q12.825 5 12 5q-.825 0-1.412.588Q10 6.175 10 7t.588 1.412Q11.175 9 12 9ZM7 21q-1.65 0-2.825-1.175Q3 18.65 3 17q0-1.65 1.175-2.825Q5.35 13 7 13q1.65 0 2.825 1.175Q11 15.35 11 17q0 1.65-1.175 2.825Q8.65 21 7 21Zm0-2q.825 0 1.412-.587Q9 17.825 9 17q0-.825-.588-1.412Q7.825 15 7 15t-1.412.588Q5 16.175 5 17t.588 1.413Q6.175 19 7 19Zm10 2q-1.65 0-2.825-1.175Q13 18.65 13 17q0-1.65 1.175-2.825Q15.35 13 17 13q1.65 0 2.825 1.175Q21 15.35 21 17q0 1.65-1.175 2.825Q18.65 21 17 21Zm0-2q.825 0 1.413-.587Q19 17.825 19 17q0-.825-.587-1.412Q17.825 15 17 15q-.825 0-1.412.588Q15 16.175 15 17t.588 1.413Q16.175 19 17 19ZM12 7ZM7 17Zm10 0Z"/>
    </Icon>
  );
});

IconMaterialSpoke.displayName = 'AmauiIconMaterialSpoke';

export default IconMaterialSpoke;
