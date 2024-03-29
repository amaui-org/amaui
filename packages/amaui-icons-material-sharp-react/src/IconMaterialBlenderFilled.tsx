import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlenderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderFilled'

      short_name='Blender'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22v-5l1.85-1.85-.6-4.15H3V3h7V2h4v1h4l-1.85 12.15L18 17v5ZM5 9h1.95L6.3 5H5Zm7 10q.425 0 .713-.288Q13 18.425 13 18t-.287-.712Q12.425 17 12 17t-.712.288Q11 17.575 11 18t.288.712Q11.575 19 12 19Zm-2.3-5h4.6l1.35-9h-7.3Z"/>
    </Icon>
  );
});

IconMaterialBlenderFilled.displayName = 'AmauiIconMaterialBlenderFilled';

export default IconMaterialBlenderFilled;
