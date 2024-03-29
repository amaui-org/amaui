import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBentoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoFilled'

      short_name='Bento'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 11V5h6v6ZM2 19V5h12v14Zm6-5.5q.625 0 1.062-.438Q9.5 12.625 9.5 12t-.438-1.062Q8.625 10.5 8 10.5t-1.062.438Q6.5 11.375 6.5 12t.438 1.062Q7.375 13.5 8 13.5Zm8 5.5v-6h6v6Z"/>
    </Icon>
  );
});

IconMaterialBentoFilled.displayName = 'AmauiIconMaterialBentoFilled';

export default IconMaterialBentoFilled;
