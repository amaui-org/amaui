import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamWallMount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWallMount'

      short_name='NestCamWallMount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 10.925q0 .9.338 1.725.337.825.987 1.475l4.325 4.325L19 12.075 14.675 7.75q-.65-.65-1.462-.988-.813-.337-1.713-.337-1.875 0-3.188 1.312Q7 9.05 7 10.925Zm6 1.5ZM4 17.45H2v-12h2q.825 0 1.412.6Q6 6.65 6 7.475q.875-1.375 2.312-2.2Q9.75 4.45 11.5 4.45q1.3 0 2.488.488 1.187.487 2.112 1.412l5.725 5.725-9.175 9.175-5.75-5.7q-.275-.275-.488-.55-.212-.275-.412-.575v1.025q0 .825-.588 1.412-.587.588-1.412.588Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMount.displayName = 'AmauiIconMaterialNestCamWallMount';

export default IconMaterialNestCamWallMount;
