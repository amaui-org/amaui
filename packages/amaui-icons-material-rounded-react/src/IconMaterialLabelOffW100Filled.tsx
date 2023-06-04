import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffW100Filled'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.825 17.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.8q0-.125.025-.288.025-.162.075-.312l-1.75-1.75q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l15.4 15.4q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-3.25-3.25q-.075.05-.263.075-.187.025-.337.025Zm10.95-2-9.45-9.4h6.9q.525 0 1.037.262.513.263.813.688l2.725 3.875q.275.4.275.875t-.275.875Z"/>
    </Icon>
  );
});

IconMaterialLabelOffW100Filled.displayName = 'AmauiIconMaterialLabelOffW100Filled';

export default IconMaterialLabelOffW100Filled;
