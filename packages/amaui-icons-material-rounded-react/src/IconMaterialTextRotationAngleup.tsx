import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngleup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleup'

      short_name='TextRotationAngleup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.775 21.025q-.3-.3-.3-.713 0-.412.3-.712l8.625-8.625h-.6q-.425 0-.713-.275-.287-.275-.287-.7 0-.425.287-.713Q16.375 9 16.8 9h3q.425 0 .725.3t.3.725V13q0 .425-.287.712-.288.288-.713.288t-.725-.288q-.3-.287-.3-.712v-.6l-8.625 8.625q-.3.3-.7.3-.4 0-.7-.3Zm.175-5.85q-.375.375-.8.3-.425-.075-.65-.575L3.575 6.3q-.175-.375-.087-.837.087-.463.387-.763.275-.275.75-.375.475-.1.85.075l8.6 3.925q.5.225.575.65.075.425-.325.825-.175.175-.45.225-.275.05-.5-.075L11.25 8.9 8.1 12.05l1.025 2.15q.125.225.075.5t-.25.475Zm-1.575-4.65L9.7 8.2 5.35 6.125l-.05.05Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleup.displayName = 'AmauiIconMaterialTextRotationAngleup';

export default IconMaterialTextRotationAngleup;
