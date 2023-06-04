import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffW100'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.75 15.7-.5-.5 2.3-3.2-3.1-4.35q-.225-.35-.55-.5-.325-.15-.75-.15H8l-.7-.7h6.9q.525 0 1.038.262.512.263.812.688l2.725 3.875q.275.4.275.875t-.275.875Zm-10.95 2q-.65 0-1.075-.425Q4.3 16.85 4.3 16.2V7.8q0-.125.025-.288.025-.162.075-.312L2.65 5.45q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l15.4 15.4q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L14.8 17.6q-.075.05-.262.075-.188.025-.338.025Zm3.8-5.3Zm2.525-1.3ZM14.2 17 5 7.8v8.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialLabelOffW100.displayName = 'AmauiIconMaterialLabelOffW100';

export default IconMaterialLabelOffW100;
