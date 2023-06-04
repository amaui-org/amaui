import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockRotationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotationW100'

      short_name='ScreenLockRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.3 11.6.5-.5 2.075 2.075-4.95 4.95-9.05-9.05 4.95-4.95L13 6.3l-.5.5-1.675-1.675-3.95 3.95 8.05 8.05 3.95-3.95Zm-4.4 10.25q-2.2 0-4.15-.837-1.95-.838-3.412-2.301-1.463-1.462-2.3-3.412-.838-1.95-.838-4.15h.7q0 2.05.788 3.875.787 1.825 2.15 3.187 1.362 1.363 3.187 2.15 1.825.788 3.875.788l-3.7-3.7.5-.5 4.75 4.75q-.45.075-.825.112-.375.038-.725.038ZM15 9V4.6h1.025v-1q0-.725.488-1.213Q17 1.9 17.725 1.9t1.213.487q.487.488.487 1.213v1h.975V9Zm1.725-4.4h2v-1q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713Zm-3.85 6.525Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotationW100.displayName = 'AmauiIconMaterialScreenLockRotationW100';

export default IconMaterialScreenLockRotationW100;
