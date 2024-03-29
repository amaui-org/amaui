import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDown'

      short_name='TextRotationDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.975 20.625q-.2 0-.4-.075t-.35-.225l-2-2q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3l.35.325v-12.2q0-.425.287-.713.288-.287.713-.287t.713.287Q7 4.6 7 5.025v12.2l.35-.35q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-2.05 2.05q-.15.15-.337.225-.188.075-.388.075ZM11.2 16.65q-.5.2-.85-.05t-.35-.8q0-.25.163-.475.162-.225.387-.3l2.25-.775V9.8L10.55 9q-.225-.075-.387-.3Q10 8.475 10 8.2q0-.55.35-.8t.85-.05l8.875 3.325q.375.15.65.537.275.388.275.813 0 .425-.275.8-.275.375-.65.525Zm3.2-2.975 4.55-1.6v-.1l-4.55-1.6Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDown.displayName = 'AmauiIconMaterialTextRotationDown';

export default IconMaterialTextRotationDown;
