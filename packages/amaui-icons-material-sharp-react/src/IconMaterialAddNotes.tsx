import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddNotes'

      short_name='AddNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v8.7q-.475-.225-.975-.388-.5-.162-1.025-.237V5H5v14h6.05q.075.55.238 1.05.162.5.387.95Zm2-3v1V5v6.075V11v7Zm2-1h4.075q.075-.525.237-1.025.163-.5.363-.975H7Zm0-4h6.1q.8-.75 1.787-1.25.988-.5 2.113-.675V11H7Zm0-4h10V7H7Zm11 14q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5Z"/>
    </Icon>
  );
});

IconMaterialAddNotes.displayName = 'AmauiIconMaterialAddNotes';

export default IconMaterialAddNotes;
