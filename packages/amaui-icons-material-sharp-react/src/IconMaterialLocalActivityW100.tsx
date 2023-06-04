import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityW100'

      short_name='LocalActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7v-3.65q.9-.425 1.45-1.25.55-.825.55-1.8 0-.975-.55-1.8-.55-.825-1.45-1.25V5.3h17.4v3.65q-.9.425-1.45 1.25-.55.825-.55 1.8 0 .975.55 1.8.55.825 1.45 1.25v3.65ZM4 18h16v-2.55q-.95-.525-1.475-1.463Q18 13.05 18 12t.525-1.988Q19.05 9.075 20 8.55V6H4v2.55q.95.525 1.475 1.462Q6 10.95 6 12t-.525 1.987Q4.95 14.925 4 15.45Zm6.15-3.3L12 13.25l1.8 1.4-.7-2.25 1.95-1.5h-2.3L12 8.6l-.75 2.3h-2.3l1.9 1.5ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityW100.displayName = 'AmauiIconMaterialLocalActivityW100';

export default IconMaterialLocalActivityW100;
