import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthAmerica = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthAmerica'

      short_name='SouthAmerica'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2-.7-.7q-.15-.15-.225-.325Q11 18.8 11 18.6V13q-.825 0-1.412-.588Q9 11.825 9 11v-1L5.875 6.875Q5 7.925 4.5 9.225T4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm1-.05q2.975-.375 4.988-2.625Q20 15.075 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.1 0-2.113.287-1.012.288-1.887.788V7h3.55q.45 0 .863.2.412.2.687.55l1.4 1.75H16q.425 0 .712.287.288.288.288.713v1.05q0 .225-.062.425-.063.2-.188.4L13 18Z"/>
    </Icon>
  );
});

IconMaterialSouthAmerica.displayName = 'AmauiIconMaterialSouthAmerica';

export default IconMaterialSouthAmerica;
