import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpecificGravity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravity'

      short_name='SpecificGravity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.2 22 3 2h18l-2.2 20Zm.475-14H9.35q.525-.475 1.2-.738Q11.225 7 12 7q.775 0 1.45.262.675.263 1.2.738h3.675l.425-4H5.225ZM12 13q.825 0 1.413-.588Q14 11.825 14 11t-.587-1.413Q12.825 9 12 9q-.825 0-1.412.587Q10 10.175 10 11q0 .825.588 1.412Q11.175 13 12 13Zm-6.1-3L7 20h10l1.1-10h-2.225q.05.25.088.488.037.237.037.512 0 1.65-1.175 2.825Q13.65 15 12 15q-1.65 0-2.825-1.175Q8 12.65 8 11q0-.275.038-.512.037-.238.087-.488ZM7 20h1.125H8h8-.125H17 7Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravity.displayName = 'AmauiIconMaterialSpecificGravity';

export default IconMaterialSpecificGravity;
