import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitW100'

      short_name='ClimateMiniSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 12V4.6h17.4V12Zm1.35 5.8v-.725q1.225 0 2.088-.85.862-.85.862-2.075h.725q0 1.525-1.075 2.588Q6.175 17.8 4.65 17.8Zm14.7 0q-1.525 0-2.588-1.062Q15.7 15.675 15.7 14.15h.725q0 1.225.85 2.075.85.85 2.075.85Zm-7.7 1.05v-4.7h.7v4.7Zm5.475-7.55H20 4 17.125ZM6.9 11.3V7.95h10.225v3.35h-.7V8.65H7.6v2.65Zm-2.9 0h16v-6H4Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitW100.displayName = 'AmauiIconMaterialClimateMiniSplitW100';

export default IconMaterialClimateMiniSplitW100;
