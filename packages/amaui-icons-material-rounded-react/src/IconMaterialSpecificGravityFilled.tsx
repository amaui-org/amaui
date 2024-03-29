import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpecificGravityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravityFilled'

      short_name='SpecificGravity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22q-.775 0-1.35-.5-.575-.5-.65-1.275L3.125 3.1q-.05-.45.25-.775T4.125 2h15.75q.45 0 .75.325t.25.775L19 20.225q-.075.775-.65 1.275-.575.5-1.35.5ZM5.675 8H9.35q.525-.475 1.2-.738Q11.225 7 12 7q.775 0 1.45.262.675.263 1.2.738h3.675l.425-4H5.225ZM12 13q.825 0 1.413-.588Q14 11.825 14 11t-.587-1.413Q12.825 9 12 9q-.825 0-1.412.587Q10 10.175 10 11q0 .825.588 1.412Q11.175 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityFilled.displayName = 'AmauiIconMaterialSpecificGravityFilled';

export default IconMaterialSpecificGravityFilled;
