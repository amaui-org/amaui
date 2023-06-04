import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockRotationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotationW100Filled'

      short_name='ScreenLockRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.925 17.475q-.3 0-.575-.112-.275-.113-.5-.313l-6.9-6.9q-.2-.225-.312-.5-.113-.275-.113-.575 0-.3.113-.588Q6.75 8.2 6.95 8l2.8-2.8q.225-.225.5-.325t.575-.1q.3 0 .588.112.287.113.487.313l.6.6v2.3q0 1.425.988 2.462.987 1.038 2.412 1.038h2.4l.5.5q.225.225.325.5t.1.575q0 .3-.1.575-.1.275-.325.5l-2.8 2.8q-.2.2-.487.313-.288.112-.588.112Zm-1.425 4.35q-.15.025-.3.025h-.3q-2.175 0-4.088-.812-1.912-.813-3.362-2.213-1.45-1.4-2.312-3.288Q2.275 13.65 2.2 11.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q.125 4.025 3.038 6.837Q8.85 21.15 12.9 21.15L9.45 17.7q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l3.825 3.825q.275.275.2.513-.075.237-.475.287ZM15.9 9q-.35 0-.625-.275T15 8.1V5.5q0-.35.275-.625T15.9 4.6h.125v-1q0-.725.488-1.213Q17 1.9 17.725 1.9t1.213.487q.487.488.487 1.213v1h.125q.35 0 .6.275t.25.625v2.6q0 .35-.275.625T19.5 9Zm.825-4.4h2v-1q0-.425-.287-.713-.288-.287-.713-.287t-.712.287q-.288.288-.288.713Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotationW100Filled.displayName = 'AmauiIconMaterialScreenLockRotationW100Filled';

export default IconMaterialScreenLockRotationW100Filled;
