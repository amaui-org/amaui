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
      <path d="M4 17.45q-.825 0-1.412-.588Q2 16.275 2 15.45v-8q0-.825.588-1.413Q3.175 5.45 4 5.45t1.412.6Q6 6.65 6 7.475q.875-1.375 2.312-2.2Q9.75 4.45 11.5 4.45q1.3 0 2.488.488 1.187.487 2.112 1.412l4.3 4.3q.3.3.45.675.15.375.15.75t-.15.75q-.15.375-.45.675l-6.35 6.35q-.3.3-.663.438-.362.137-.737.137t-.75-.137q-.375-.138-.675-.438L6.9 15.55q-.275-.275-.488-.55-.212-.275-.412-.575v1.025q0 .825-.588 1.412-.587.588-1.412.588Zm3-6.525q0 .9.338 1.725.337.825.987 1.475l4.325 4.325L19 12.075 14.675 7.75q-.65-.65-1.462-.988-.813-.337-1.713-.337-1.875 0-3.188 1.312Q7 9.05 7 10.925Zm6 1.525Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMount.displayName = 'AmauiIconMaterialNestCamWallMount';

export default IconMaterialNestCamWallMount;
