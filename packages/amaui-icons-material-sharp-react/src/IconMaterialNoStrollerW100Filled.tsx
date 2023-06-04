import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoStrollerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStrollerW100Filled'

      short_name='NoStroller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.25 19.85q-.5 0-.875-.375T6 18.6q0-.525.375-.888.375-.362.875-.362.525 0 .887.362.363.363.363.888 0 .5-.363.875-.362.375-.887.375Zm8.05-7.375L12.425 9.6 15.6 5.9q.425-.5.888-.725.462-.225 1.037-.225.725 0 1.213.488.487.487.487 1.212V7h-.7v-.35q0-.425-.287-.713-.288-.287-.713-.287t-.762.162q-.338.163-.613.513l-.85 1Zm-.975 1.85.975.975v1.05H6.675l4-4.675L2.25 3.25l.5-.5L21.8 21.8l-.5.5-7.975-7.975Zm.025 5.525q-.5 0-.875-.375T13.1 18.6q0-.525.375-.888.375-.362.875-.362.525 0 .888.362.362.363.362.888 0 .5-.362.875-.363.375-.888.375Zm-2.975-11.3L8.2 5.375q.65-.225 1.288-.325.637-.1 1.212-.1.85 0 1.65.15.8.15 1.6.425Z"/>
    </Icon>
  );
});

IconMaterialNoStrollerW100Filled.displayName = 'AmauiIconMaterialNoStrollerW100Filled';

export default IconMaterialNoStrollerW100Filled;
