import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspaces = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Workspaces'

      short_name='Workspaces'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.65 0-2.825-1.175Q2 18.65 2 17q0-1.65 1.175-2.825Q4.35 13 6 13q1.65 0 2.825 1.175Q10 15.35 10 17q0 1.65-1.175 2.825Q7.65 21 6 21Zm6-10q-1.65 0-2.825-1.175Q8 8.65 8 7q0-1.65 1.175-2.825Q10.35 3 12 3q1.65 0 2.825 1.175Q16 5.35 16 7q0 1.65-1.175 2.825Q13.65 11 12 11Zm6 10q-1.65 0-2.825-1.175Q14 18.65 14 17q0-1.65 1.175-2.825Q16.35 13 18 13q1.65 0 2.825 1.175Q22 15.35 22 17q0 1.65-1.175 2.825Q19.65 21 18 21ZM12 9q.825 0 1.413-.588Q14 7.825 14 7t-.587-1.412Q12.825 5 12 5q-.825 0-1.412.588Q10 6.175 10 7t.588 1.412Q11.175 9 12 9ZM6 19q.825 0 1.412-.587Q8 17.825 8 17q0-.825-.588-1.412Q6.825 15 6 15t-1.412.588Q4 16.175 4 17t.588 1.413Q5.175 19 6 19Zm12 0q.825 0 1.413-.587Q20 17.825 20 17q0-.825-.587-1.412Q18.825 15 18 15q-.825 0-1.413.588Q16 16.175 16 17t.587 1.413Q17.175 19 18 19ZM12 7ZM6 17Zm12 0Z"/>
    </Icon>
  );
});

IconMaterialWorkspaces.displayName = 'AmauiIconMaterialWorkspaces';

export default IconMaterialWorkspaces;
