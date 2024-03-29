import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fluid'

      short_name='Fluid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 23h-8v-4.075q-2.575-.35-4.287-2.312Q5 14.65 5 12V1h14v11q0 2.65-1.712 4.613-1.713 1.962-4.288 2.312V21h6Zm-5.25-10h3.15q.05-.25.075-.488Q17 12.275 17 12v-1h-4V9h4V7h-5V5h5V3H7v8h2.75q.825 0 1.562.375.738.375 1.238 1.025.2.275.525.437.325.163.675.163ZM12 17q1.225 0 2.275-.538Q15.325 15.925 16 15h-2.25q-.825 0-1.562-.375-.738-.375-1.238-1.025-.2-.275-.525-.438Q10.1 13 9.75 13H7.1q.35 1.725 1.712 2.863Q10.175 17 12 17Zm-1.05-4Z"/>
    </Icon>
  );
});

IconMaterialFluid.displayName = 'AmauiIconMaterialFluid';

export default IconMaterialFluid;
