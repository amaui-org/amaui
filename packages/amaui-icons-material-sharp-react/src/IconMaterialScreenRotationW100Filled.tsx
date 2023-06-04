import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationW100Filled'

      short_name='ScreenRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.025 18.975-9.05-9.05 4.95-4.95 9.05 9.05ZM12 22.7q-2.2 0-4.15-.838-1.95-.837-3.412-2.3-1.463-1.462-2.3-3.412Q1.3 14.2 1.3 12H2q0 2.05.788 3.875.787 1.825 2.15 3.187 1.362 1.363 3.187 2.15Q9.95 22 12 22l-3.7-3.7.5-.5 4.75 4.75q-.45.075-.825.113-.375.037-.725.037ZM22 12q0-2.075-.788-3.887-.787-1.813-2.15-3.175-1.362-1.363-3.175-2.151Q14.075 2 12 2l3.7 3.7-.5.5-4.75-4.75q.425-.075.85-.113.425-.037.7-.037 2.225 0 4.163.837 1.937.838 3.399 2.3 1.463 1.463 2.301 3.4Q22.7 9.775 22.7 12Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationW100Filled.displayName = 'AmauiIconMaterialScreenRotationW100Filled';

export default IconMaterialScreenRotationW100Filled;
