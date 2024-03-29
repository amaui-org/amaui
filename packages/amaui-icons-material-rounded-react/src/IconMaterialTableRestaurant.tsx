import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRestaurant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurant'

      short_name='TableRestaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 9H19.7l-.85-3H5.225Zm7.675-1.5ZM6.975 13h10.1l-.25-2H7.25ZM5.15 20q-.45 0-.738-.337-.287-.338-.237-.788L5.25 11H3.025q-.5 0-.787-.4-.288-.4-.163-.875l1.425-5q.1-.325.35-.525.25-.2.6-.2H19.6q.35 0 .6.2t.35.525l1.425 5q.125.475-.163.875-.287.4-.787.4h-2.2l1.05 7.875q.05.45-.237.788Q19.35 20 18.9 20q-.375 0-.662-.238-.288-.237-.338-.612L17.35 15H6.7l-.55 4.15q-.05.375-.338.612Q5.525 20 5.15 20Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurant.displayName = 'AmauiIconMaterialTableRestaurant';

export default IconMaterialTableRestaurant;
