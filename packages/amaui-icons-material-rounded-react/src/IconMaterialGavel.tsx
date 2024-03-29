import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGavel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gavel'

      short_name='Gavel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.975 21q-.425 0-.7-.288Q4 20.425 4 20t.287-.712Q4.575 19 5 19h10.025q.425 0 .7.288.275.287.275.712t-.287.712Q15.425 21 15 21Zm3.25-6.275L5.4 11.9q-.575-.575-.588-1.413-.012-.837.563-1.412L6.1 8.35 11.8 14l-.725.725q-.575.575-1.425.575-.85 0-1.425-.575ZM16 9.8l-5.65-5.7.725-.725q.575-.575 1.413-.563.837.013 1.412.588l2.825 2.825q.575.575.575 1.425 0 .85-.575 1.425Zm3.9 9.5L7.55 6.95l1.4-1.4 12.375 12.375q.275.275.263.687-.013.413-.288.688-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialGavel.displayName = 'AmauiIconMaterialGavel';

export default IconMaterialGavel;
