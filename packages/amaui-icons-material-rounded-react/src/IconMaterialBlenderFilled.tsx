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
      <path d="M8 22q-.825 0-1.412-.587Q6 20.825 6 20v-1q0-1.175.513-2.175.512-1 1.337-1.675L7.25 11H5q-.825 0-1.413-.588Q3 9.825 3 9V5q0-.825.587-1.413Q4.175 3 5 3h5q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3h2.825q.45 0 .763.35.312.35.237.8l-1.675 11q.825.675 1.338 1.675Q18 17.825 18 19v1q0 .825-.587 1.413Q16.825 22 16 22ZM6.95 9 6.3 5H5v4ZM12 19q.425 0 .713-.288Q13 18.425 13 18t-.287-.712Q12.425 17 12 17t-.712.288Q11 17.575 11 18t.288.712Q11.575 19 12 19Zm-2.3-5h4.6l1.35-9h-7.3Z"/>
    </Icon>
  );
});

IconMaterialBlenderFilled.displayName = 'AmauiIconMaterialBlenderFilled';

export default IconMaterialBlenderFilled;
